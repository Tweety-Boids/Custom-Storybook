// import api utils
import { fetchBooks, fetchBook, createBook } from "../utils/apiRequests";
import { ActionTypes } from "../context/GlobalContext";

const getBooks = () => {
  return async (dispatch: React.Dispatch<any>) => {
    const books = await fetchBooks();
    // console.log("DATA: getBooks()", books);
    if (books) {
      dispatch({
        type: ActionTypes.GET_BOOKS,
        payload: books,
      });
    }
  };
};

export { getBooks };
