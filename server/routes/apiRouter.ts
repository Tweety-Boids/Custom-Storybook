import express from 'express';

import imageRouter from './imageRouter.js';

const apiRouter = express.Router();

// apiRouter.use('/vector');
// apiRouter.use('/books');
// apiRouter.use('/scenes');
apiRouter.use('/image', imageRouter);

export { apiRouter };