// import types
import { createBookRequest } from "../../types/types";
import { ActionTypes } from "../../context/GlobalContext";

// import api requests
import { createBook } from "../../utils/apiRequests";


export const createBookAction = (bookDetails: createBookRequest) => {
    return async (dispatch: React.Dispatch<any>) => {
        try {
            const newBook = await createBook(bookDetails);
            if (newBook) {
                dispatch({
                    type: ActionTypes.CREATE_BOOK,
                    payload: newBook
                });
            }
        } catch (error) {
            console.error("Error creating book:", error);
        }
    };
};