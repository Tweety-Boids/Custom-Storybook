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
            const { metadata, generatedStory } = book;
            // console.log('BOOK METADATA',metadata)
            
            // const coverImgData = book.coverImg?.data.data
            const coverImgData = book.coverImg?.data?.data 
            ? Array.from(book.coverImg.data.data)
            : null;

            return (
              <Book
                key={index}
                title={metadata.title}
                coverImg={coverImgData}
                storyText={ book.coverImg?.data}
              />
            );
          })}
      </div>
    </>
  );
};

export default BookList;
