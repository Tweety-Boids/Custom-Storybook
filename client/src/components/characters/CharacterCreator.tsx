import { useState } from "react";
import Dropdown from "../ui/Dropdown";
import TextInput from "../ui/TextInput";
import * as optionList from "../ui/dropdownOptions";
import { mockHumanCharacterForPostRequest, mockFantasyCharacterForPostRequest } from "../../utils/mockData";

const CharacterCreator = () => {
  const [characterDetails, setCharacterDetails] = useState({
    ...mockHumanCharacterForPostRequest,
  });  

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setCharacterDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createCharacter = () => {
    console.log("createCharacter button clicked", characterDetails);
  };

  return (
    <>
      <div className="flex">
        <h3>Create a character</h3>
        <button onClick={createCharacter}>Awaken</button>
      </div>
      <div className="character-creator-wrapper">
        <TextInput
          label="Name"
          name="name"
          value={characterDetails.name}
          onChange={handleChange}
        />
        <TextInput
          label="Age"
          name="age"
          value={characterDetails.age}
          onChange={handleChange}
        />
        <Dropdown
          label="Pronouns"
          name="pronouns"
          value={characterDetails.pronouns}
          options={optionList.pronouns}
          onChange={handleChange}
        />
        <Dropdown
          label="Hair Color"
          name="hairColor"
          value={characterDetails.hairColor}
          options={optionList.hairColors}
          onChange={handleChange}
        />
        <Dropdown
          label="Eye Color"
          name="eyeColor"
          value={characterDetails.eyeColor}
          options={optionList.eyeColors}
          onChange={handleChange}
        />
        <TextInput
          label="Physical Description"
          name="physicalDescription"
          value={characterDetails.physicalDescription}
          size={3}
          onChange={handleChange}
        />
        <TextInput
          label="Personality"
          name="personality"
          size={3}
          value={characterDetails.personality}
          onChange={handleChange}
        />
        <TextInput
          label="Special Talent"
          name="specialTalent"
          value={characterDetails.specialTalent}
          onChange={handleChange}
        />
        <TextInput
          label="Catch Phrase"
          name="catchPhrase"
          value={characterDetails.catchPhrase}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default CharacterCreator;
