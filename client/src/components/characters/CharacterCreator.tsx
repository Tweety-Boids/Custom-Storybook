import Dropdown from '../ui/Dropdown'
import TextInput from '../ui/TextInput'

const CharacterCreator = () => {
// define DropDown options 
  const hairColors = {
    black: 'Black', 
    brown:'Brown', 
    blonde:'Blonde', 
    red:'Red', 
    grey:'Grey', 
  }

  const eyeColors = {
    blue: 'Blue', 
    black: 'Black', 
    brown:'Brown', 
    Green:'Green', 
  }

    return (
      <>
        <h1>--CHARACTER CREATOR--</h1>
        <div className="character-creator-wrapper">
          <TextInput label='Name'/>
          <TextInput label="Catch Phrase"/>
          <TextInput label="Special Talent"/>
          <Dropdown label="Hair Color" optionList={hairColors}/>
          <Dropdown label="Eye Color" optionList={eyeColors}/>
        </div>
      </>
    );
  };
  
  export default CharacterCreator;
  