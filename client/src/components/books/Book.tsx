import useGlobalContext from "../../hooks/useGlobalContext";
import { ActionTypes } from "../../context/GlobalContext";
interface BookProps {
  title: string;
  coverImg: any;
  storyText: string[];
}

const Book = ({ title, coverImg, storyText }: BookProps) => {
  const { dispatch } = useGlobalContext();
  const arrayBufferToBase64 = (buffer: number[]) => {
    const binary = buffer.reduce(
      (data, byte) => data + String.fromCharCode(byte),
      "",
    );
    return window.btoa(binary);
  };

  const openBook = () => {
    console.log(`Book Clicked: ${title}`);
    dispatch({
      type: ActionTypes.SET_CURRENT_BOOK,
      payload: { title, coverImg, storyText },
    });
    dispatch({ type: ActionTypes.TOGGLE_BOOK_READER, payload: true });
  };

  return (
    <>
      <div className="book-wrapper" onClick={openBook}>
        <h3 className="book-title">{title}</h3>
        <div className="book-img-wrapper">
          {coverImg ? (
            <img
              className="object-contain"
              src={`data:image/jpeg;base64,${arrayBufferToBase64(coverImg)}`}
              alt={`Cover for ${title}`}
            />
          ) : (
            <div className="placeholder-cover">No Cover</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Book;
