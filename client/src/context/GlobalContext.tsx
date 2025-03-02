// import react hooks: createContext & useReducer required; useEffect to populate initial state from GET requests
// define DISPATCH ACTIONS: object
// define APPLICATION STATE: object
// define REDUCER FUNCTION using immer
// create CONTEXT
// define PROVIDER COMPONENT
// export provider, context and action types

import { createContext, useReducer, useEffect } from "react";
import { produce } from "immer";
import { getBooks } from "../actions/bookActions";
// define DISPATCH ACTIONS
interface ActionTypes {
  TOGGLE_STORY_PANEL: string;
  GET_BOOKS: string;
  GET_BOOK: string;
  TURN_PAGE: string;
  CREATE_BOOK: string;
  DELETE_BOOK: string;
  GET_CHARACTERS: string;
  CREATE_CHARACTER: string;
  DELETE_CHARACTER: string;
  EDIT_CHARACTER: string;
  // RATE_BOOK: string;
  // RATE_PAGE: string;
}
const ActionTypes: ActionTypes = {
  TOGGLE_STORY_PANEL: "TOGGLE_STORY_PANEL",
  GET_BOOKS: "GET_BOOKS",
  GET_BOOK: "GET_BOOK",
  TURN_PAGE: "TURN_PAGE",
  CREATE_BOOK: "CREATE_BOOK",
  DELETE_BOOK: "DELETE_BOOK",
  GET_CHARACTERS: "GET_CHARACTERS",
  CREATE_CHARACTER: "CREATE_CHARACTER,",
  DELETE_CHARACTER: "DELETE_CHARACTER,",
  EDIT_CHARACTER: "EDIT_CHARACTER,",
  // RATE_BOOK: 'RATE_BOOK',
  // RATE_PAGE: 'RATE_PAGE',
};

// define APPLICATION STATE
interface ApplicationState {
  showStoryPanel: boolean; // boolean to toggle side panel
  bookList: any[]; // array of objects: book_id, book_title, book_cover
  characterList: any[]; // array of objects: character_id, *character_info*
}

const initialState: ApplicationState = {
  showStoryPanel: false, // boolean to toggle side panel
  bookList: [], // array of objects: book_id, book_title, book_cover
  characterList: [], // array of objects: character_id, *character_info*
};

// define REDUCER FUNCTION
// input: current state and dispatch action
// return: mutated state
interface DispachAction {
  type: string;
  payload: any;
}
const reducer = (
  state: ApplicationState,
  action: DispachAction,
): ApplicationState => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.TOGGLE_STORY_PANEL:
        draft.showStoryPanel = action.payload;
        break;
      case ActionTypes.GET_BOOKS:
        console.log("FETCHED BOOKS", action.payload);
        draft.bookList = action.payload;
        break;
      case ActionTypes.GET_CHARACTERS:
        draft.characterList = action.payload;
        break;
      // default case if action.type doesn't match any case
      default:
        break;
    }
  });
};

// create CONTEXT
interface GlobalContext {
  state: ApplicationState;
  dispatch: React.Dispatch<DispachAction>;
}
const GlobalContext = createContext<GlobalContext | null>(null);

// define PROVIDER COMPONENT
const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // extract state and dispatch from useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // populate state on initial render
  useEffect(() => {
    // fetch books and characters

    getBooks()(dispatch);
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// export the GlobalProvider for use in the main App component, wrapping the component tree that needs access to the context
// export the GlobalContext for other components to use to access the global state and dispatch function
// export the ActionTypes for use in other components
export { GlobalProvider, GlobalContext, ActionTypes };
