import express from "express";
import bookRouter from "./bookRouter.ts";
import openaiRouter from "./openaiRouter.ts";
import pineconeRouter from "./pineconeRouter.ts";
import charactersRouter from "./charactersRouter.ts";

const apiRouter = express.Router();

apiRouter.use("/", pineconeRouter);
apiRouter.use("/", openaiRouter);
apiRouter.use("/books", bookRouter);
// apiRouter.use('/scenes');
// apiRouter.use('/image');
apiRouter.use("/characters", charactersRouter);
export { apiRouter };
