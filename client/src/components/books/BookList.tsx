// import hook to access application state
import useGlobalContext from "../../hooks/useGlobalContext";
import Book from "./Book";
// get books from state and render

const BookList = () => {
  const { state } = useGlobalContext();

  const { bookList } = state;
  console.log("BookList:", bookList);

  return (
    <>
      <div className="book-list-wrapper">
        {bookList &&
          bookList.map((book, index) => {
            const { _id, metadata, generatedStory, coverImgUrl } = book;
            return (
              <Book
                key={index}
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
