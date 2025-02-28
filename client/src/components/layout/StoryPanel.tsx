import BookCreator from "../books/BookCreator";
import CharacterCreator from "../characters/CharacterCreator";
import CharacterList from "../characters/CharacterList";

const StoryPanel = () => {
  return (
    <div className='story-panel-wrapper'>
      <h1>--STORY PANEL--</h1>
      <BookCreator />
      <CharacterCreator />
      <CharacterList />
    </div>
  )
}

export default StoryPanel
