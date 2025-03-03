// import hook to access application state
import useGlobalContext from "../../hooks/useGlobalContext";
import Book from "./Book";
// get books from state and render

const BookList = () => {
  const { state } = useGlobalContext();

  const { bookList } = state;
  // console.log('BookList:', bookList);

  return (
    <>
      <h1>--BOOK LIST--</h1>
      <div className="book-list-wrapper">
        {bookList &&
          bookList.map((book) => {
            return <Book key={book.id} title={book.title} />;
          })}
      </div>
    </>
  );
};

export default BookList;
