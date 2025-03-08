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
      await createBookAction(bookDetails)(dispatch);
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  return (
    <>
      <div className="flex items-center gap-5">
        <h3 className="text-2xl">Compose your story</h3>
        <button onClick={handleCreateBook}>Scribe</button>
      </div>

      <div className="book-creator-wrapper"></div>
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
      {/* <CharacterList /> */}
    </>
  );
};

export default BookCreator;
