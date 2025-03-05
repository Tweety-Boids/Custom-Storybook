import Dropdown from "../ui/Dropdown";
import TextInput from "../ui/TextInput";
import * as optionList from "../ui/dropdownOptions";

const CharacterCreator = () => {
  return (
    <>
      <h3>--CHARACTER CREATOR--</h3>
      <div className="character-creator-wrapper">
        <TextInput label="Name" />
        <Dropdown label="Pronouns" options={optionList.pronouns} />
        <TextInput label="Catch Phrase" />
        <TextInput label="Personality" />
        <TextInput label="Special Talent" />
        <Dropdown label="Hair Color" options={optionList.hairColors} />
        <Dropdown label="Eye Color" options={optionList.eyeColors} />
        <TextInput label="Physical Description" />
      </div>
    </>
  );
};

export default CharacterCreator;
