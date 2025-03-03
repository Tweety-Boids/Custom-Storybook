interface BookProps {
  title: string;
}

const Book = ({ title }: BookProps) => {
  return (
    <>
      <div className="book-wrapper">
        {/* <h1>--BOOK--</h1> */}
        <div className="book-img-wrapper">**img**</div>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Book;
