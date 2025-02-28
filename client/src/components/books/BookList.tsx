import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>--BOOK LIST--</h1>
      <div className="book-list-wrapper">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </>
  );
};

export default BookList;
