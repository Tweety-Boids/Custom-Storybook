import { ActionTypes } from "../../context/GlobalContext";
import useGlobalContext from "../../hooks/useGlobalContext";

import BookCreator from "../books/BookCreator";
import CharacterCreator from "../characters/CharacterCreator";

const StoryPanel = () => {
  const { state, dispatch } = useGlobalContext();
  const { showBookCreator, showCharacterCreator } = state;

  const toggleBookCreator = () => {
    dispatch({
      type: ActionTypes.TOGGLE_BOOK_CREATOR,
      payload: !showBookCreator,
    });
  };
  const toggleCharacterCreator = () => {
    dispatch({
      type: ActionTypes.TOGGLE_CHARACTER_CREATOR,
      payload: !showCharacterCreator,
    });
  };

  return (
    <div className="story-panel-wrapper">
      <button onClick={toggleBookCreator}>B</button>
      <button onClick={toggleCharacterCreator}>C</button>
      {showBookCreator && <BookCreator />}
      {showCharacterCreator && <CharacterCreator />}
    </div>
  );
};

export default StoryPanel;
