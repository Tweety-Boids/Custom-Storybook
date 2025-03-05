import { RequestHandler } from "express";
import { ServerError, StoryMetadata } from "../../types/types";
import { Pinecone, PineconeRecord } from "@pinecone-database/pinecone";
import "dotenv/config";
import OpenAI from "openai";
import { Embeddings } from "openai/resources/embeddings.mjs";

const pc = new Pinecone({
  apiKey: `${process.env.PINECONE_API_KEY}`,
});

interface EmbeddingData {
  story: StoryMetadata;
  embedding: OpenAI.Embedding["embedding"];
}

export const upsertDataToPinecone: RequestHandler = async (_req, res, next) => {
  //res locals embedding and story from OAI
  const { embedding, metadata } = res.locals;
  const realAzzMetadata: EmbeddingData = {
    story: metadata,
    embedding,
  };
  const index = pc.index<StoryMetadata>("stories");

  //TODO: Fix this in order to upsert embedded books vvv
  /**
   * Generate Pinecone records from embeddings data.
   */
  const generatePineconeRecords = (
    embeddingsData: EmbeddingData[],
  ): PineconeRecord<StoryMetadata>[] => {
    const pineconeRecords: PineconeRecord<StoryMetadata>[] = [];
    for (const { story, embedding } of embeddingsData) {
      pineconeRecords.push({
        id: story.id,
        values: embedding,
        metadata: story,
      });
    }

    console.log("Genereated Pinecone Records:", pineconeRecords);

    return pineconeRecords;
  };

  /**
   * Create batches of Pinecone records for upserting.
   * Refer to the Pinecone documentation: https://docs.pinecone.io/guides/data/upsert-data
   */
  const createPineconeBatches = (
    vectors: PineconeRecord<StoryMetadata>[],
    batchSize = 200,
  ): PineconeRecord<StoryMetadata>[][] => {
    const batches: PineconeRecord<StoryMetadata>[][] = [];
    for (let i = 0; i < vectors.length; i += batchSize) {
      batches.push(vectors.slice(i, i + batchSize));
    }

    console.log("Batches:", batches);
    return batches;
  };

  /**
   * Upsert batches of Pinecone records to Pinecone.
   * Provide logging for each batch you try to, including the IDs of the first and last records in the batch.
   * Log the success or failure of each batch upsert.
   */
  const upsertBatchesToPicone = async (
    pineconeBatches: PineconeRecord<StoryMetadata>[][],
  ): Promise<void> => {
    const delayBatch = (ms: number): Promise<void> =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const upsertResults = await Promise.allSettled(
      pineconeBatches.map(async (batch, i) => {
        // await delayBatch(1000 * i); // Uncomment if you're getting Pinecone network errors
        console.log(
          `Upserting batch ${i} of ${pineconeBatches.length}: IDs ${
            batch[0].id
          } through ${batch[batch.length - 1].id}`,
        );

        console.log("Upsert Batches to Pinecone:", batch);

        return index.upsert(batch);
      }),
    );

    upsertResults.forEach((result, i) => {
      if (result.status === "fulfilled") {
        console.log(`Batch ${i + 1} upserted successfully.`);
      } else {
        console.error(`Failed to upsert batch ${i + 1}:`, result.reason);
      }
    });
  };

  const main = async (): Promise<void> => {
    // TODO: generatePineconeRecords needs embeddings data to function. will probably be res.locals data.
    const pineconeRecords = generatePineconeRecords([realAzzMetadata]);
    const pineconeBatches = createPineconeBatches(pineconeRecords);
    upsertBatchesToPicone(pineconeBatches);
  };

  main().catch((error) => {
    console.error("An error occurred in main:", error);
    process.exit(1);
  });
};

//fetch from pinecone by element id for the bookshelf
export const queryPineconeById: RequestHandler = async (_req, res, next) => {
  // To get the unique host for an index,
  // see https://docs.pinecone.io/guides/data/target-an-index
  const index = pc.index("stories", "INDEX_HOST");

  const fetchResult = await index
    .namespace("example-namespace")
    .fetch(["id-1", "id-2"]);
};

// get elements from pinecone using embed/vectors
export const queryPineconeByEmbed: RequestHandler = async (_req, res, next) => {
  const { embedding } = res.locals;
  if (!embedding) {
    const error: ServerError = {
      log: "Database query middleware did not receive embedding",
      status: 500,
      message: { err: "An error occurred before querying the database" },
    };
    return next(error);
  }

  const index = pc.index("stories");

  const pineconeQueryResponse = await index.query({
    vector: embedding,
    topK: 3,
    includeMetadata: true,
  });

  console.log("pineconeQueryResponse", pineconeQueryResponse.matches);
  res.locals.pineconeQueryResult = pineconeQueryResponse.matches as [];

  return next();
};
