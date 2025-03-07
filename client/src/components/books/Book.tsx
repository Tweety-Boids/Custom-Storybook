import coverImage from "../../../../server/SpiritedAway.jpeg";
interface BookProps {
  title: string;
  coverImg: string;
  storyText: string[];
}

const Book = ({ title, coverImg, storyText }: BookProps) => {
  const openBook = () => {
    console.log(`Book Clicked: ${title}`);
    // display read view
  };
  return (
    <>
      <div className="book-wrapper" onClick={openBook}>
        {/* <h3>--BOOK--</h3> */}
        <h3>{title}</h3>
        <div className="book-img-wrapper">
          <img src={coverImage} alt="Spirited Away" />
        </div>
        {/* <div>{storyText[0]}</div> */}
      </div>
    </>
  );
};

export default Book;
