import useGlobalContext from "../../hooks/useGlobalContext";
import { ActionTypes } from "../../context/GlobalContext";
import { useState } from "react";

const BookReader = () => {
  const { state, dispatch } = useGlobalContext();

  const handleCloseBook = () => {
    console.log("Closing Book");
    dispatch({ type: ActionTypes.TOGGLE_BOOK_READER, payload: false });
    dispatch({ type: ActionTypes.SET_CURRENT_BOOK, payload: null });
  };

  const handlePreviousPage = () => {
    console.log("Previous Page");
    setStoryProgress(storyProgress - 1);
    console.log(visibleText.pop())
    // setVisibleText[...visibleText.pop()]
  };

  const handleNextPage = () => {
    console.log("Next Page");
    setStoryProgress(storyProgress + 1);
    console.log(visibleText.push(cleanStory[storyProgress]))

    // setVisibleText([...visibleText, cleanStory[storyProgress]]);
  };

  const { currentBook } = state;
  const { title, coverImg, storyText } = currentBook;

  // console.log("StoryText", storyText);

  const cleanStory: string[] = storyText[0]
    // First replace any escaped newlines with actual newlines
    .replace(/\\n/g, "\n")
    // Split by ", followed by optional whitespace and quote
    .split(/",\s*"/)
    // Clean up remaining quotes at start and end, and trim whitespace
    .map((sentence: string) => sentence.replace(/^"|"$/g, "").trim())
    // Remove any empty strings
    .filter((sentence: string) => sentence.length > 0);

  const arrayBufferToBase64 = (buffer: number[]) => {
    const binary = buffer.reduce(
      (data, byte) => data + String.fromCharCode(byte),
      "",
    );
    return window.btoa(binary);
  };

  const [storyProgress, setStoryProgress] = useState(0);
  const [visibleText, setVisibleText] = useState([cleanStory[storyProgress]]);
  console.log(storyProgress)
  console.log("Clean Story Array", cleanStory[0]);
  console.log("Clean Story Array", cleanStory[1]);

  //   const storyTextArray = story.split("\n");
  //   console.log("Story Text Array", storyTextArray);

  return (
    <div className="book-reader-wrapper bg-secondary-color absolute left-1/2 top-1/2 h-[1000px] w-[1500px] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl">{title}</h1>
      <div className="book-reader-content flex items-center justify-around p-10">
        <div className="book-reader-page-img flex-1">
          <img
            className="h-[800px] w-auto object-contain"
            src={`data:image/jpeg;base64,${arrayBufferToBase64(coverImg)}`}
            alt={title}
          />
        </div>
        <div className="book-reader-page-text flex-1 h-[800px] overflow-y-scroll">
          {visibleText &&
            visibleText.map((text) => {
              return <p className="py-5">{text}</p>;
            })}
        </div>
      </div>
      <div className="book-reader-progress-bar">
        <h2>
          {storyProgress}/{cleanStory.length}
        </h2>
      </div>
      <div className="book-reader-nav-panel">
        <button className="book-reader-nav-button" onClick={handlePreviousPage}>
          Previous
        </button>
        <button className="book-reader-nav-button" onClick={handleNextPage}>
          Next
        </button>
        <button className="book-reader-nav-button" onClick={handleCloseBook}>
          Close Book
        </button>
      </div>
    </div>
  );
};

export default BookReader;
