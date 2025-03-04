import { Request, Response, NextFunction } from "express";
import { UserPreferenceBody } from "../../types/types";
import User from "../model/mongo.ts";

const mongoController: any = {};

mongoController.addUserPreference = async (
  req: Request<{}, {}, UserPreferenceBody>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { title, art_style, author, character, genre, setting } = req.body;

  try {
    const newUser = new User({
      title: title,
      art_style: art_style,
      author: author,
      character: character,
      genre: genre,
      setting: setting
    });

    await newUser.save();
    console.log('User preferences saved:', newUser);
  } catch (error) {
    console.error('Error inserting user preferences:', error);
  }

  next();
};

export default mongoController;
// node --loader ts-node/esm /Users/stevenyeung/Custom-Storybook/server/controllers/mongoControllers.ts