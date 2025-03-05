import express from "express";
import {
  upsertDataToPinecone,
  queryPineconeById,
  queryPineconeByEmbed,
} from "../controllers/pineconeController.ts";
import {
  OpenAIEmbedding,
  OpenAIChat,
} from "../controllers/openaiController.ts";
const pineconeRouter = express.Router();

const controller = {
  middleware: () => {
    console.log("im a fake function >:)");
  },
};

//get by id
pineconeRouter.get("/gbid", queryPineconeById, (req, res) => {
  res.status(200).json(res.locals.chores);
});
//get by embed
pineconeRouter.get("/gbembed", queryPineconeByEmbed, (req, res) => {
  res.status(200).json(res.locals.chores);
});

//upsert to pinecone
//take res.locals.storygen to embed -> upsert embedded story to pinecone
pineconeRouter.post(
  "/upsert",
  OpenAIEmbedding,
  upsertDataToPinecone,
  (req, res) => {
    res.status(200).json(res.locals.book);
  },
);

export default pineconeRouter;
