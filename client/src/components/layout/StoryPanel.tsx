import BookCreator from "../books/BookCreator";
import CharacterCreator from "../characters/CharacterCreator";

const StoryPanel = () => {

  return (
    <div className="story-panel-wrapper">
      <BookCreator />
      <CharacterCreator />
    </div>
  );
};

export default StoryPanel;
