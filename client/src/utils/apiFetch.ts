import { createBookRequest, createCharacterRequest } from "../types/types";
const API_URL = "http://localhost:3000/api";

// interface ApiRequests {
//   getBooks: () => Promise<any>;
//   getBook: () => Promise<any>; // id on body or param??
//   createBook: (bookDetails: createBookReqest) => Promise<any>;

//   getCharacters: () => Promise<any>;
//   createCharacter: () => Promise<any>;
//   editCharacter: () => Promise<any>;
// }

const getBooks = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/books`);
    if (!response.ok) {
      throw new Error(`Failed to get book: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`ERROR: getBooks: ${err}`);
  }
};

const getBook = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/books`);
    if (!response.ok) {
      throw new Error(`Failed to get book: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`ERROR: getBook: ${err}`);
  }
};

const createBook = async (bookDetails: createBookRequest): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookDetails),
    });
    if (!response.ok) {
      throw new Error(`Failed to get book: ${response.status}`);
    }
    const data = await response.json();
    console.log("createChore: ", data);
    return data;
  } catch (err) {
    console.error(`ERROR: createBook: ${err}`);
  }
};

const getCharacters = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/characters`);
    if (!response.ok) {
      throw new Error(`Failed to get book: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`ERROR: getCharacters: ${err}`);
  }
};

const createCharacter = async (
  characterDetails: createCharacterRequest,
): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/characters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(characterDetails),
    });
    if (!response.ok) {
      throw new Error(`Failed to get book: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`ERROR: createCharacter: ${err}`);
  }
};

const editCharacter = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/books`);
    if (!response.ok) {
      throw new Error(`Failed to get book: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("This is the editCharacter error: ", err);
  }
};

export {
  getBooks,
  getBook,
  createBook,
  getCharacters,
  createCharacter,
  editCharacter,
};
