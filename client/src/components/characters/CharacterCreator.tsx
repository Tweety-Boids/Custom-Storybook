import Dropdown from '../ui/Dropdown'
import TextInput from '../ui/TextInput'

const CharacterCreator = () => {
    return (
      <>
        <h1>--CHARACTER CREATOR--</h1>
        <div className="character-creator-wrapper">
          <TextInput />
          <TextInput />
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
      </>
    );
  };
  
  export default CharacterCreator;
  