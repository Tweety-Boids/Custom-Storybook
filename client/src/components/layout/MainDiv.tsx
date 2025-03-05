import BookList from "../books/BookList";
import StoryPanel from "./StoryPanel";

const MainDiv = () => {
  return (
    <>
      {/* <h3>--MAIN-DIV--</h3> */}
      <div className="main-div-wrapper">
        <StoryPanel />
        <BookList />
      </div>
    </>
  );
};

export default MainDiv;
