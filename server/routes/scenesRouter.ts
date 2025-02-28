import express from 'express';

const scenesRouter = express.Router();

const controller = {
    middleware: () =>{ console.log('im a fake function >:)')}
}
//example route
scenesRouter.post('/get', (req, res) => {
    res.status(200).json(res.locals.chores);
});


export { scenesRouter };