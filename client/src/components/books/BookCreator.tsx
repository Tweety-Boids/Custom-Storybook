// import state management hooks
import { useState } from "react";
import useGlobalContext from "../../hooks/useGlobalContext";

// import components
import TextInput from "../ui/TextInput";
import Dropdown from "../ui/Dropdown";
import CharacterList from "../characters/CharacterList";

// import utils
import * as optionList from "../ui/dropdownOptions";
import { mockBookForPostRequest } from "../../utils/mockData";

// import actions
import { createBookAction } from "./BookActions";

const BookCreator = () => {
  const { dispatch } = useGlobalContext();
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

  const handleCreateBook = async () => {
    try {
      console.log("createBook button clicked");
      await createBookAction(mockBookForPostRequest)(dispatch);
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  return (
    <>
      <div className="flex">
        <h3>Compose a story</h3>
        <button onClick={handleCreateBook}>Scribe</button>
      </div>

      {/* <h3>Build a Book</h3> */}
      <div className="book-creator-wrapper"></div>
      {/* <div onClick={createBook}>Create Book:</div> */}
      <TextInput
        label="Title"
        name="title"
        value={bookDetails.title}
        onChange={handleChange}
      />
      <TextInput
        label="Author"
        name="author"
        value={bookDetails.author}
        onChange={handleChange}
      />
      <TextInput
        label="Setting"
        name="setting"
        value={bookDetails.setting}
        onChange={handleChange}
      />
      <TextInput
        label="Plot"
        name="plot"
        size={3}
        value={bookDetails.plot}
        onChange={handleChange}
      />
      <Dropdown
        label="Art Style"
        name="artStyle"
        value={bookDetails.artStyle}
        options={optionList.artStyles}
        onChange={handleChange}
      />
      <Dropdown
        label="Genre"
        name="genre"
        value={bookDetails.genre}
        options={optionList.genres}
        onChange={handleChange}
      />
      <CharacterList />
    </>
  );
};

export default BookCreator;
