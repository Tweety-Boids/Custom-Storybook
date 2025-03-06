import { Request, Response, NextFunction } from "express";
import Characters from "../model/mongo.ts";

const mongoController: any = {};

mongoController.getCharacters = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  
  try {
    const characters = await Characters.find();
    console.log(characters);
    res.locals.characters = characters;
    next();
  } catch (error) {
    console.error('Error getting all characters:', error);
  }
};

mongoController.addCharacter = async (
  req: Request<{}, {}, Characters>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name, pronouns, catch_phrase, personality, special_talent, hair_color, eye_color, physical_description } = req.body;

  if (!name || !pronouns || !catch_phrase || !personality || !special_talent || !hair_color || !eye_color || !physical_description) {
    throw new Error('All fields are required');
  }

  try {
    const newCharacter = new Characters({
      name: name,
      pronouns: pronouns,
      catch_phrase: catch_phrase,
      personality: personality,
      special_talent: special_talent,
      hair_color: hair_color,
      eye_color: eye_color,
      physical_description: physical_description,
    });

    const characterID = await newCharacter.save();
    console.log('New character saved:', newCharacter);
    res.locals.newCharacter = characterID;
    // console.log("RES LOCALS IS: ", res.locals.newCharacter);
    next();
  } catch (error) {
    console.error('Error inserting new character:', error);
  }
};

export default mongoController;
// node --loader ts-node/esm /Users/stevenyeung/Custom-Storybook/server/controllers/mongoControllers.ts