// import coverImage from "../../../../server/SpiritedAway.jpeg";
interface BookProps {
  title: string;
  coverImg: any;
  storyText: string[];
}

const Book = ({ title, coverImg, storyText }: BookProps) => {
  const arrayBufferToBase64 = (buffer: number[]) => {
    const binary = buffer.reduce(
      (data, byte) => data + String.fromCharCode(byte),
      "",
    );
    return window.btoa(binary);
  };

  // if (coverImg) {
  //   console.log("COVER IMG", coverImg);
  //   // const dataUrl = bufferToDataUrl(coverImg);
  //   // console.log("DATA URL", dataUrl);
  // }

  const openBook = () => {
    console.log(`Book Clicked: ${title}`);
    // display read view
  };
  return (
    <>
      <div className="book-wrapper" onClick={openBook}>
        <h3>{title}</h3>
        <div className="book-img-wrapper">
          {coverImg ? (
            <img
              src={`data:image/jpeg;base64,${arrayBufferToBase64(coverImg)}`}
              alt={`Cover for ${title}`}
            />
          ) : (
            <div className="placeholder-cover">No Cover</div>
          )}
        </div>
        {/* <div>{storyText[0]}</div> */}
      </div>
    </>
  );
};

export default Book;
