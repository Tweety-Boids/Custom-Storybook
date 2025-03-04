import express from 'express';
import bookRouter from './bookRouter.ts';

const apiRouter = express.Router();

// apiRouter.use('/vector');
apiRouter.use('/books', bookRouter);
// apiRouter.use('/scenes');
// apiRouter.use('/image');
export { apiRouter };