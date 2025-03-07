import express from "express";
import {
  upsertDataToPinecone,
  queryPineconeById,
  queryPineconeByEmbed,
  getAllBooks,
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

//get all books
pineconeRouter.get("/gall", getAllBooks, (req, res) => {
  res.status(200).json(res.locals.allBooks);
});
//get by id
pineconeRouter.post("/gbid", queryPineconeById, (req, res) => {
  res.status(200).json(res.locals.idBooks);
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
