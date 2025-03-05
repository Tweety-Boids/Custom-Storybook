import { Request, Response, NextFunction } from "express";

const bookController: any = {};

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
