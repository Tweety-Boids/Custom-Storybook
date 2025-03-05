import { createBookRequest, createCharacterRequest } from "../types/types";
const API_URL = "http://localhost:3000/api";

// interface ApiRequests {
//   fetchBooks: () => Promise<any>;
//   fetchBook: () => Promise<any>; // id on body or param??
//   createBook: (bookDetails: createBookReqest) => Promise<any>;

//   getCharacters: () => Promise<any>;
//   createCharacter: () => Promise<any>;
//   editCharacter: () => Promise<any>;
// }

const fetchBooks = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/books`);
    if (!response.ok) {
      throw new Error(`Failed to get book: ${response.status}`);
    }
    const data = await response.json();
    console.log("DATA: fetchBooks: ", data);
    if (data) {
    }
    return data;
  } catch (err) {
    console.error(`ERROR: fetchBooks: ${err}`);
  }
};

const fetchBook = async (id: number): Promise<any> => {
  try {
    console.log("REQUEST: fetchBook: ", id);
    const response = await fetch(`${API_URL}/books/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to get book: ${response.status}`);
    }
    const data = await response.json();
    console.log("DATA: fetchBook: ", data);
    return data;
  } catch (err) {
    console.error(`ERROR: fetchBook: ${err}`);
  }
};

const createBook = async (bookDetails: createBookRequest): Promise<any> => {
  try {
    console.log("REQUEST: createBook", bookDetails);

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
    console.log("createBok: ", data);
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
    console.log("DATA: getCharacters: ", data);
    return data;
  } catch (err) {
    console.error(`ERROR: getCharacters: ${err}`);
  }
};

const createCharacter = async (
  characterDetails: createCharacterRequest,
): Promise<any> => {
  try {
    console.log("REQUEST: createCharacter", characterDetails);
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
    console.log("DATA: createCharacter: ", data);
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
  fetchBooks,
  fetchBook,
  createBook,
  getCharacters,
  createCharacter,
  editCharacter,
};
