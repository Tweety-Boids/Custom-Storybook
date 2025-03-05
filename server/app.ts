import express, { ErrorRequestHandler } from 'express';
import { apiRouter } from './routes/apiRouter.ts';

import { ServerError } from '../types/types.ts';
import path from 'path'; // provides utilities for working with file and directory paths
import { fileURLToPath } from 'url'; //* build the dirname manually due to es6 restrictions

const app = express();

const __filename = fileURLToPath(import.meta.url); //*recreate dirname for ES6 modules
const __dirname = path.dirname(__filename);

import cors from 'cors';
app.use(cors());

app.use(express.json()); // converts request object as json
app.use(express.urlencoded({ extended: true })); // recognizes request object as strings or arrays
app.use(express.static(path.resolve(__dirname, '../src/assets'))); // geneerating static files


app.use('/api', apiRouter);

const errorHandler: ErrorRequestHandler = (
    err: ServerError,
    _req,
    res,
    _next
) => {
    const defaultErr: ServerError = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj: ServerError = { ...defaultErr, ...err};
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
}

app.use((req, res) =>{
    res.status(404).send('This is not the page you\re looking for.');
}); // catch all error handler

app.use(errorHandler);

export default app;