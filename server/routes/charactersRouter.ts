import express from 'express';
import mongoController from '../controllers/mongoControllers.ts';

const charactersRouter = express.Router();

// get all characters
charactersRouter.get('/',mongoController.getCharacters, (_req, res) => {
    res.status(200).json(res.locals.characters);
});

// create new character
charactersRouter.post('/', mongoController.addCharacter, (_req, res) => {
    res.status(200).json(res.locals.newCharacter);
});


export default charactersRouter;