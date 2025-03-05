import express from 'express';
import stabilityController from '../controllers/stabilityController.js';

import { Request, Response } from 'express';

const imageRouter = express.Router();

// imageRouter.post('/stability', (_req: Request, res: Response): any => {
//     console.log ('we are in the imageRouter');
//     return res.status(200);
// })


//send detains to the StabilityAI for image generation
imageRouter.post('/stability', stabilityController.generateImage, (req: Request, res: Response): any => {
    console.log ('we are at the end of the imageRouter.post')
    // const image = res.locals.image;

    return res.status(200).send();
});



//query mongoDB for existing images attached to stories (search via the sceneID)
imageRouter.get('/');


export default imageRouter;