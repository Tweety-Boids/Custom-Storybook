import express from 'express';
import { OpenAIEmbedding, OpenAIChat } from '../controllers/openaiController.ts';


const openaiRouter = express.Router();

const controller = {
    middleware: () =>{ console.log('im a fake function >:)')}
}

//embed
openaiRouter.post('/embed',OpenAIEmbedding, (_req, res) => {
    res.status(200).json(res.locals.embedding);
});

//chat gen story
//flow: user query used to generate story in OAIChat -> returns storyGen in res.locals
openaiRouter.post('/storygen',OpenAIChat, (_req, res) => {
    res.status(200).json(res.locals.storyGen);
});


export default openaiRouter;