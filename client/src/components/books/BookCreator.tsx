import TextInput from '../ui/TextInput'
import Dropdown from '../ui/Dropdown'
import * as optionList from "../ui/dropdownOptions";

const BookCreator = () => {
  const createBook = () => {
    console.log('createBook button clicked');
  }


  return (
    <>
      <h3>--BOOK CREATOR--</h3>
      <div className="book-creator-wrapper"></div>
      {/* <div onClick={createBook}>Create Book:</div> */}
      <TextInput  label="Title"/>
      <TextInput  label="Author"/>
      <TextInput  label="Setting"/>
      <TextInput  label="Plot"/>
      <Dropdown label="Art Style" options={optionList.artStyles}/>
      <Dropdown label="Genre" options={optionList.genres}/>
      {/* <button onClick={createBook}>Create Book: </button><input type="text"/> */}
    </>
  );
};

export default BookCreator;
