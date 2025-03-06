import { useState } from "react";
import Dropdown from "../ui/Dropdown";
import TextInput from "../ui/TextInput";
import * as optionList from "../ui/dropdownOptions";
import CharacterList from "../characters/CharacterList";
import { mockBookForPostRequest } from "../../utils/mockData";

const BookCreator = () => {
  const [bookDetails, setBookDetails] = useState({
    ...mockBookForPostRequest,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setBookDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createBook = () => {
    console.log("createBook button clicked");
  };

  return (
    <>
      <div className="flex">
        <h3>Compose a story</h3>
        <button onClick={createBook}>Scribe</button>
      </div>

      {/* <h3>Build a Book</h3> */}
      <div className="book-creator-wrapper"></div>
      {/* <div onClick={createBook}>Create Book:</div> */}
      <TextInput label="Title" name="title" value={bookDetails.title} onChange={handleChange}/>
      <TextInput label="Author" name="author" value={bookDetails.author} onChange={handleChange}/>
      <TextInput label="Setting" name="setting" value={bookDetails.setting} onChange={handleChange}/>
      <TextInput label="Plot" name="plot" size={3} value={bookDetails.plot} onChange={handleChange}/>
      <Dropdown label="Art Style" name="artStyle" value={bookDetails.artStyle} options={optionList.artStyles} onChange={handleChange}/>
      <Dropdown label="Genre" name="genre" value={bookDetails.genre} options={optionList.genres} onChange={handleChange}/>
      <CharacterList />
    </>
  );
};

export default BookCreator;
