import express from "express";
import bookController from "../controllers/bookController.ts";

const bookRouter = express.Router();

bookRouter.get("/", bookController.getBooks, (req, res) => {
  res.status(200).json(res.locals.books);
});

export default bookRouter;
