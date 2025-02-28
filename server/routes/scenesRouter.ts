import express from 'express';

const scenesRouter = express.Router();

//example route
scenesRouter.post('/get', (req, res) => {
    res.status(200).json(res.locals.chores);
})


export { scenesRouter };