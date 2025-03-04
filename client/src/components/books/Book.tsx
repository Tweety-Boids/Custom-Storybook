interface BookProps {
  title: string;
}

const Book = ({ title }: BookProps) => {
  return (
    <>
      <div className="book-wrapper">
        {/* <h3>--BOOK--</h3> */}
        <div className="book-img-wrapper">**img**</div>
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default Book;
