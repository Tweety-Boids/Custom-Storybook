import { createBookRequest, createCharacterRequest } from "../types/types";
const API_URL = "http://localhost:3000/api";

// to fetch all books, 1st request returns ids, send map of 2nd POST per id
const fetchBooks = async (): Promise<any> => {
  try {
    console.log("REQUEST: all books");
    const response = await fetch(`${API_URL}/books`);
    if (!response.ok) {
      throw new Error(`Failed to get book: ${response.status}`);
    }
    const data = await response.json();
    console.log("DATA: fetchBooks: ", data);
    return data;
    // if (bookIds.vectors) {
    //   const bookList = await bookIds.vectors.map(async (id: any) => {
    //     console.log("REQUEST: bookList", id);

    //     const response = await fetch(`${API_URL}/gbid`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(id),
    //     });
    //     if (!response.ok) {
    //       throw new Error(`Failed to get book: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     console.log("DATA book from pinecone: ", data.records[1234].metadata);
    //     return data;
    //   });
    // }
  } catch (err) {
    console.error(`ERROR: fetchBooks: ${err}`);
  }
};

const fetchBook = async (): Promise<any> => {
  try {
    // console.log("REQUEST: fetchBook: ", id);
    const mockId = 1234
    console.log("REQUEST: fetchBook: ", mockId);
    const response = await fetch(`${API_URL}/gbid`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mockId),
    });
    if (!response.ok) {
      throw new Error(`Failed to get book: ${response.status}`);
    }
    const data = await response.json();
    console.log("DATA book from pinecone: ", data.records[1234].metadata);
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
    console.log("RESPONSE: createBook: ", data);
    return data;
  } catch (err) {
    console.error(`ERROR: createBook: ${err}`);
  }
};

const getCharacters = async (): Promise<any> => {
  try {
    console.log("REQUEST: all characters");
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
