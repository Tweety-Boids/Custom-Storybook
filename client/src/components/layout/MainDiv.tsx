import useGlobalContext from "../../hooks/useGlobalContext";
import BookList from "../books/BookList";
import BookReader from "../books/BookReader";
import StoryPanel from "./StoryPanel";
const MainDiv = () => {
  const { state } = useGlobalContext();
  const { showBookReader } = state;
  return (
    <>
      <div className="main-div-wrapper">
        <StoryPanel />
        <BookList />

        {showBookReader && <BookReader />}
      </div>
    </>
  );
};

export default MainDiv;
