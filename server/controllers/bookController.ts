import { Request, Response, NextFunction } from "express";
import { Book } from "../model/bookModel.js";

const bookController: any = {};

bookController.postBook = async (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction,
): Promise<void> => {
  console.log("CONTROLLER: postBook");
  try {
    console.log("postBook: req.body", req.body);
    const { title, author, setting, plot, characters, artStyle, genre } =
      req.body;
    const bookMetadata = {
      title,
      author,
      setting,
      plot,
      characters,
      artStyle,
      genre,
    };
    // add if statement to check missing properties
    const newBook = await Book.create({ metadata: bookMetadata });
    // console.log("postBook: newBook", newBook);

    res.locals.metadata = newBook;
    console.log("postBook: res.locals.metadata", res.locals.metadata);
    next();
  } catch (error: any) {
    console.error("Error in the postBook method:", error.message);
    throw error;
  }
};

bookController.getBooks = async (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction,
): Promise<void> => {
  try {
    console.log("ENDPOINT: getBooks");
    const books = await Book.find();
    if (!books) {
      return next({
        log: "No books found",
        status: 404,
        message: { err: "No books found" },
      });
    }
    res.locals.books = books;
    return next();
  } catch (error: any) {
    console.error("Error in the getBooks method:", error.message);
    throw error;
  }
};

export default bookController;
