import express from "express";
import bookController from "../controllers/bookController.ts";
import { OpenAIChat, OpenAIEmbedding } from "../controllers/openaiController.ts";
import { upsertDataToPinecone } from "../controllers/pineconeController.ts";
import stabilityController from "../controllers/stabilityController.js";

const bookRouter = express.Router();

bookRouter.get("/", bookController.getBooks, (req, res) => {
  res.status(200).json(res.locals.books);
});

bookRouter.post("/", 
  bookController.postBook, 
  OpenAIChat, 
  stabilityController.generateText2Image,
  OpenAIEmbedding, 
  // upsertDataToPinecone, 
  (req, res) => {
  res.status(200).json(res.locals.userQuery);
});

export default bookRouter;