const BookCreator = () => {
  const createBook = () => {
    console.log('createBook button clicked');
  }

  return (
    <>
      <h1>--BOOK CREATOR--</h1>
      <div className="book-creator-wrapper"></div>
      <button onClick={createBook}>Create Book: </button><input type="text"/>
    </>
  );
};

export default BookCreator;
