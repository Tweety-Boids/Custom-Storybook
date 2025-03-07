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
  // TOGGLE_STORY_PANEL: string;
  TOGGLE_BOOK_CREATOR: string;
  TOGGLE_CHARACTER_CREATOR: string;
  GET_BOOKS: string;
  GET_BOOK: string;
  CREATE_BOOK: string;
  GET_CHARACTERS: string;
  CREATE_CHARACTER: string;
}
const ActionTypes: ActionTypes = {
  // TOGGLE_STORY_PANEL: "TOGGLE_STORY_PANEL",
  TOGGLE_BOOK_CREATOR: "TOGGLE_BOOK_CREATOR",
  TOGGLE_CHARACTER_CREATOR: "TOGGLE_CHARACTER_CREATOR",
  GET_BOOKS: "GET_BOOKS",
  GET_BOOK: "GET_BOOK",
  CREATE_BOOK: "CREATE_BOOK",
  GET_CHARACTERS: "GET_CHARACTERS",
  CREATE_CHARACTER: "CREATE_CHARACTER",
};

// define APPLICATION STATE
interface ApplicationState {
  // showStoryPanel: boolean;
  showBookCreator: boolean;
  showCharacterCreator: boolean;
  bookList: any[]; // array of objects: book_id, book_title, book_cover
  characterList: any[]; // array of objects: character_id, *character_info*
}

const initialState: ApplicationState = {
  showBookCreator: true,
  showCharacterCreator: false,
  bookList: [{
    metadata: {title: "Test Book Title"},
    generatedStory: [],
    coverImgUrl: ''
  }], // array of objects: book_id, book_title, book_cover
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
      // case ActionTypes.TOGGLE_STORY_PANEL:
      //   draft.showStoryPanel = action.payload;
      //   break;
      case ActionTypes.TOGGLE_BOOK_CREATOR:
        draft.showCharacterCreator = false;
        draft.showBookCreator = action.payload;
        break;
      case ActionTypes.TOGGLE_CHARACTER_CREATOR:
        draft.showBookCreator = false;
        draft.showCharacterCreator = action.payload;
        break;
      case ActionTypes.GET_BOOKS:
        // console.log("FETCHED BOOKS", action.payload);
        draft.bookList = action.payload;
        break;
      case ActionTypes.GET_BOOK:
        console.log("FETCHED BOOK", action.payload);
        // draft.bookList = action.payload;
        break;
      case ActionTypes.CREATE_BOOK:
        const newBook = action.payload;
        draft.bookList.push(newBook);
        break;
      case ActionTypes.GET_CHARACTERS:
        draft.characterList = action.payload;
        break;
      case ActionTypes.CREATE_CHARACTER:
        const newCharacter = action.payload;
        draft.characterList.push(newCharacter);
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
