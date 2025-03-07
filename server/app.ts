import express, { ErrorRequestHandler } from "express";
import mongoose from "mongoose";
import { apiRouter } from "./routes/apiRouter.ts";
import dotenv from "dotenv";

import { ServerError } from "../types/types.ts";
import path from "path"; // provides utilities for working with file and directory paths
import { fileURLToPath } from "url"; //* build the dirname manually due to es6 restrictions
import cors from "cors";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url); //*recreate dirname for ES6 modules
const __dirname = path.dirname(__filename);

const mongoURI = `${process.env.MONGO_CONNECTION_STRING}`;

mongoose.set('bufferTimeoutMS', 30000); // Increase timeout to 30 seconds if needed

mongoose
  .connect(mongoURI)
  .then(async () => {
    console.log("Connected to Database");
    // Your database operations here
  })
  .catch((err) => {
    console.error("Initial Connection error:", err);
    process.exit(1); // Exit the process if we can't connect
  });

// Add more robust connection error handling
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1); // Exit on connection error
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.use(cors());

app.use(express.json()); // converts request object as json
app.use(express.urlencoded({ extended: true })); // recognizes request object as strings or arrays
app.use(
  "/assets",
  express.static(path.resolve(__dirname, "../client/src/assets")),
); // serve static files from client/src/assets

app.use("/api", apiRouter);

const errorHandler: ErrorRequestHandler = (
  err: ServerError,
  _req,
  res,
  _next,
) => {
  const defaultErr: ServerError = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj: ServerError = { ...defaultErr, ...err };
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
};

app.use((req, res) => {
  res.status(404).send("This is not the page you\re looking for.");
}); // catch all error handler

app.use(errorHandler);

export default app;
