import express from "express";
import bookRouter from "./bookRouter.ts";
import openaiRouter from "./openaiRouter.ts";
import pineconeRouter from "./pineconeRouter.ts";

const apiRouter = express.Router();

apiRouter.use("/", pineconeRouter);
apiRouter.use("/books", bookRouter);
// apiRouter.use('/scenes');
// apiRouter.use('/image');
apiRouter.use("/", openaiRouter);
export { apiRouter };
