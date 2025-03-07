import { Request, Response, NextFunction } from "express";

interface BookRequestBody {
  title: string;
  author: string;
  setting: string;
  plot: string;
  characters: string;
  artStyle: string;
  genre: string;
}

const bookController: any = {};

bookController.postBook = async (
  req: Request<{}, {}, BookRequestBody>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { title, author, setting, plot, characters, artStyle, genre } = req.body;
  
    // add if statement to check missing properties
  
    res.locals.userQuery = { title, author, setting, plot, characters, artStyle, genre };
    console.log(res.locals.userQuery);
    next();

  } catch (error) {
    if (error instanceof Error) {
      console.error("Error in the postBook method:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
    throw error;
  }
}



bookController.getBooks = async (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction,
): Promise<void> => {
  console.log("ENDPOINT: getBooks");
  const mockBookData = [
    {
      id: 1,
      title: "BOOK 1",
    },
    {
      id: 2,
      title: "BOOK 2",
    },
    {
      id: 3,
      title: "BOOK 3",
    },
  ];
  res.locals.books = mockBookData;
  return next();
};

export default bookController;
