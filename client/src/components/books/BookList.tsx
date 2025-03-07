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
      {/* <h3>--BOOK LIST--</h3> */}
      <div className="book-list-wrapper">
        {bookList &&
          bookList.map((book) => {
            const { metadata, generatedStory, coverImgUrl } = book;
            return (
              <Book
                key={book.id}
                title={metadata.title}
                coverImg={coverImgUrl}
                storyText={generatedStory}
              />
            );
          })}
      </div>
    </>
  );
};

export default BookList;
