import { RequestHandler } from 'express';
import { ServerError, StoryMetadata } from '../../types/types';
import { Pinecone, PineconeRecord } from '@pinecone-database/pinecone';
import 'dotenv/config';
import OpenAI from 'openai';

const pc = new Pinecone({
  apiKey: `${process.env.PINECONE_API_KEY}`
});

interface EmbeddingData {
  story: StoryMetadata;
  embedding: OpenAI.Embedding['embedding'];
}

export const upsertDataToPinecone: RequestHandler = async(_req, res, next) => {
    const pinecone = new Pinecone();
const index = pinecone.index<StoryMetadata>('movies');


/**
 * Generate Pinecone records from embeddings data.
 */
const generatePineconeRecords = (
  embeddingsData: EmbeddingData[]
): PineconeRecord<StoryMetadata>[] => {
  const pineconeRecords: PineconeRecord<StoryMetadata>[] = [];
  for (const { movie, embedding } of embeddingsData) {
    pineconeRecords.push({
      id: movie.id,
      values: embedding,
      metadata: movie,
    });
  }
  return pineconeRecords;
};

/**
 * Create batches of Pinecone records for upserting.
 * Refer to the Pinecone documentation: https://docs.pinecone.io/guides/data/upsert-data
 */
const createPineconeBatches = (
  vectors: PineconeRecord<StoryMetadata>[],
  batchSize = 200
): PineconeRecord<StoryMetadata>[][] => {
  const batches: PineconeRecord<StoryMetadata>[][] = [];
  for (let i = 0; i < vectors.length; i += batchSize) {
    batches.push(vectors.slice(i, i + batchSize));
  }
  return batches;
};

/**
 * Upsert batches of Pinecone records to Pinecone.
 * Provide logging for each batch you try to, including the IDs of the first and last records in the batch.
 * Log the success or failure of each batch upsert.
 */
const upsertBatchesToPicone = async (
  pineconeBatches: PineconeRecord<StoryMetadata>[][]
): Promise<void> => {
  const delayBatch = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const upsertResults = await Promise.allSettled(
    pineconeBatches.map(async (batch, i) => {
      // await delayBatch(1000 * i); // Uncomment if you're getting Pinecone network errors
      console.log(
        `Upserting batch ${i} of ${pineconeBatches.length}: IDs ${
          batch[0].id
        } through ${batch[batch.length - 1].id}`
      );
      return index.upsert(batch);
    })
  );

  upsertResults.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      console.log(`Batch ${i + 1} upserted successfully.`);
    } else {
      console.error(`Failed to upsert batch ${i + 1}:`, result.reason);
    }
  });
};


    const main = async (): Promise<void> => {

        //* Place holder data for the generate pinecone records
        const placeholderMetaData = {
            id: '1234',
            title: 'humpty dumpty',
            story: 'HE FELL',
            characters: ['humpty', 'the guy who pushed him'],
            genre: 'horror',
            author: 'Sylvester the cat'
        }
        
        const placeholderOAIEmbed = [-2,-1,0,1,2]

        const placeholderFullEmbed: EmbeddingData = {
            story: placeholderMetaData,
            embedding: placeholderOAIEmbed
        }

        // TODO: generatePineconeRecords needs embeddings data to function. will probably be res.locals data.
        const pineconeRecords = generatePineconeRecords([placeholderFullEmbed]);
        const pineconeBatches = createPineconeBatches(pineconeRecords);
        upsertBatchesToPicone(pineconeBatches);
    };

    main().catch((error) => {
        console.error('An error occurred in main:', error);
        process.exit(1);
    });
}

export const queryPineconeDatabase: RequestHandler = async (
  _req,
  res,
  next
) => {
  const { embedding } = res.locals;
  if (!embedding) {
    const error: ServerError = {
      log: 'Database query middleware did not receive embedding',
      status: 500,
      message: { err: 'An error occurred before querying the database' },
    };
    return next(error);
  }

  const index = pc.index("movies")

  const pineconeQueryResponse = await index.query({
    vector: embedding,
    topK: 3,
    includeMetadata: true
  });
  
  

  console.log("pineconeQueryResponse", pineconeQueryResponse.matches);
  res.locals.pineconeQueryResult = pineconeQueryResponse.matches as [];
    // res.locals.pineconeQueryResult = [
    //   {
    //     id: 'sample-3',
    //     score: 0.54014945,
    //     values: [],
    //     sparseValues: undefined,
    //     metadata: {
    //       cast: 'Tammy Lauren, Chris Lemmon',
    //       director: 'Robert Kurtzman',
    //       genre: 'horror',
    //       id: 'sample-3',
    //       origin: 'American',
    //       plot:
    //         'A narrator (Angus Scrimm) explains that when "God breathed life into the universe…the light gave birth to Angels…the earth gave birth to man...the fire gave birth to the djinn, creatures condemned to dwell in the void between the worlds." If a person wakes a djinn, that person will receive three wishes but the third wish will free legions of djinn on Earth. In 1127, the djinn (Andrew Divoff) asks a Persian emperor to make his second wish. When the emperor wishes to see wonders, the djinn uses his powers to torture and mutilate people in the palace. The emperor is horrified, but the djinn tells him to use his third wish to set things right. Before the emperor can make his third wish, Zoroaster (Ari Barak), a sorcerer, explains the consequences of the third wish and reveals a fire opal, which pulls the djinn inside and traps him.\r\n' +
    //         `In present-day America, Raymond Beaumont (Robert Englund) supervises workers lowering a box containing an antique statue of Ahura Mazda onto a ship. The worker (Joseph Pilato) who is operating the crane is drunk and drops the box, killing Beaumont's assistant (Ted Raimi) and destroying the statue. A dockworker steals the fire opal from the rubble and pawns it. Eventually the jewel reaches Regal Auctioneers, where Nick Merritt (Chris Lemmon) instructs appraiser Alexandra "Alex" Amberson (Tammy Lauren) to examine it, which wakes the djinn. Alex sees something inside the jewel and leaves it with her close friend and colleague, Josh Aickman (Tony Crane), to analyze. As he is collecting data, the gem explodes, destroying the lab and releasing the djinn. Josh is killed, upon his wish for relief from his physical pain.\r\n` +
    //         `Alex tracks the gem to the statue which she tracks to Beaumont, who sends Alex to visit Wendy Derleth (Jenny O'Hara), a folklore professor, who explains the history of the gem and the djinn. Later, Alex learns that the djinn needs to power the gem with human souls and then grant her three wishes before he can open the gateway to release the djinn on Earth. Meanwhile, the djinn takes the form of a dead man and uses the name Nathaniel Demerest. He grants wishes in exchange for souls while he searches for Alex. Each time the djinn grants a wish, Alex sees troubling visions. She consults Derleth, but realizes that she is talking to the djinn, who has killed Derleth and taken her form. The djinn confronts Alex and offers her three wishes, as well an extra "test" wish; she orders the djinn to kill itself. He shoots himself in the head with a gun but his wound heals instantly, revealing the djinn as an immortal. Using the first of the official three wishes, Alex wishes to know her opponent, the djinn. He teleports her to his world within the gem which terrifies her. Granting her wish to know what he is, the djinn explains, "To you, I am this: The cry of the abandoned child. The whimper of the whipped beast. I am the face that stares back at you from the shadows of your mirror. The hollowness at the heart of all your hopes, Alexandra. I AM DESPAIR." She wishes herself back to her apartment, alone.\r\n` +
    //         "The Djinn had been threatening Alex's sister, Shannon (Wendy Benson), so Alex hurries to a party Beaumont invited them to earlier. The djinn follows, again disguised as Nathaniel Demerest. When Beaumont wishes his party would be unforgettable, the djinn causes artwork to kill the guests. Eventually the djinn corners the sisters and attempts to scare Alex into making her third wish. Alex wishes the crane operator, Mickey Torelli, had not been drunk at work, undoing the events that followed and trapping the djinn in the fire opal again.\r\n" +
    //         "The now sober crane operator lowers the crate with no problems. Alex visits Josh—now alive again—who notices that Alex seems pleased with herself, though she does not explain why. Inside the jewel on the statue of Ahura Mazda—now in Beaumont's private collection—the djinn sits on a throne, waiting to be released.",
    //       title: 'Wishmaster',
    //       wiki: 'https://en.wikipedia.org/wiki/Wishmaster_(film)',
    //       year: 1997,
    //     },
    //   },
    //   {
    //     id: 'sample-5',
    //     score: 0.265349865,
    //     values: [],
    //     sparseValues: undefined,
    //     metadata: {
    //       cast: 'Steve Guttenberg, Kathleen Quinlan',
    //       director: 'George Miller',
    //       genre: 'family',
    //       id: 'sample-5',
    //       origin: 'American',
    //       plot:
    //         "One morning, a dog named Zeus goes to the pier, spots a dolphin, and becomes fascinated by its movements. Afterwards, he returns home to his owner, Terry Barnett, an aspiring musician, and his son, Jordan, who appears to be taking care of him. Later that morning, Zeus chases a cat and subsequently destroys the outdoor garden of Mary Beth Dunhill, a marine biologist and the Barnetts' next-door neighbor. Terry calms Zeus down and apologizes to Mary Beth, although she is agitated by him.\r\n" +
    //         'Mary Beth later goes to her workplace and is followed by Zeus, who notices her photo of the same dolphin from earlier. Upon arriving, she is met by her research partner, Becky, and her rival, Claude Carver. Mary Beth and Becky travel out to the ocean on a boat to follow the dolphin they are researching, whom they name Roxanne, and Zeus stows away with them. However, while in the middle of the ocean, he slips off. Roxanne saves him from a shark and gives him a ride back to the boat on her back, which surprises and fascinates Mary Beth and Becky, who find that Zeus and Roxanne can do "inter-species communication". While stopping over on the way home with Zeus, Mary Beth spots her two impossible daughters, Judith and Nora, skating against her wishes. Arriving home, she asks Jordan if she could borrow Zeus for her research on Roxanne, who she hopes to release back into the wild. Jordan agrees, and he and Terry accompany her on her research.\r\n' +
    //         "During the following days, Terry begins to fall in love with Mary Beth as he manages to find inspiration for his music, while Jordan bonds with Judith and Nora. After Terry saves Judith and Nora while they are skating in a factory, Mary Beth asks him out on a date. After spending the night at a local beachside resort, they awkwardly kiss. Meanwhile, Claude, wanting research grant money to come to his research and not Mary Beth's, tries to steal hers, but winds up getting comically thwarted by Zeus. Then, he tries gaining the lead in her interspecies communication study, although his attempts to have one of his research dolphins bond with another animal fail one after another.\r\n" +
    //         "Through the conniving of Jordan, Judith, and Nora, Terry decides to move into Mary Beth's house with Jordan and Zeus, but after seeing a photo of his late wife, he decides to pursue his original plan of traveling to another town to continue writing his music. This causes both Zeus and Roxanne distress. While staying at a hotel with his owners, Zeus runs away back to Mary Beth's research center. Noticing his disappearance and realizing where he was going, Terry and Jordan return to town, while Mary Beth uses a submersible to go down and investigate the seabed after Claude claims Roxanne was caught in an illegal fishing net and killed. Zeus returns to the research center, where he is captured by Claude, who intends to use him as bait to lure out Roxanne, who is in fact alive, and capture her. However, Zeus and Roxanne work together to trap him and his assistant in a net, where they are arrested by police.\r\n" +
    //         "While exploring the seabed, Mary Beth's submersible's propeller is tangled in the fishing nets, and when she opens the main hatch thinking she'd escape through it, water begins flooding the interior. Roxanne leads Terry to Mary Beth, and he manages to free her from the trapped submersible. Afterwards, Jordan, Judith, and Nora convince him to marry her. During the wedding, she is given a grant for her research on Zeus and Roxanne. Immediately afterwards, a pod of dolphins appears, and Zeus convinces Roxanne to join them. Zeus watches happily with Terry, Mary Beth, Jordan, Judith, and Nora as Roxanne leaps into the air with the pod.",
    //       title: 'Zeus and Roxanne',
    //       wiki: 'https://en.wikipedia.org/wiki/Zeus_and_Roxanne',
    //       year: 1997,
    //     },
    //   },
    //   {
    //     id: 'sample-7',
    //     score: 0.242158,
    //     values: [],
    //     sparseValues: undefined,
    //     metadata: {
    //       cast: 'Tim Curry, Daryl Hannah',
    //       director: 'Dave Payne',
    //       genre: 'comedy',
    //       id: 'sample-7',
    //       origin: 'American',
    //       plot:
    //         `Discovering that his grandparents have developed "Waltzheimer's disease", a disease that is slowly turning them "normal", Gomez organizes a family reunion, hoping that some branch of his enormous family tree will find a cure. Unfortunately, the company arranging it misspells his surname and reunites him with the Adams family instead, including Dr. Philip Adams, who plans to poison his father and rearrange his will.\r\n` +
    //         'Gomez hopes that Dr. Adams can cure his grandparents; Morticia spends time with the women; Fester and Thing do their best to capture Butcher, a mutated puppy who feeds on human hair; Wednesday and Pugsley are busy making new friends; and Lurch falls in love. A couple who are headed to the reunion are given the wrong address and end up in the Addams family mansion, where Granny and Cousin Itt are staying.',
    //       title: 'Addams Family Reunion',
    //       wiki: 'https://en.wikipedia.org/wiki/Addams_Family_Reunion',
    //       year: 1998,
    //     },
    //   },
    // ];
    return next();
};