const API_URL = "http://localhost:3000/api";

interface ApiRequests {
  getBooks: () => Promise<any>;
  getBook: () => Promise<any>; // id on body or param??
  createBook: () => Promise<any>;

  getCharacters: () => Promise<any>;
  createCharacter: () => Promise<any>;
  editCharacter: () => Promise<any>;
}

const apiFetch: ApiRequests = {
  getBooks: async () => {
    try {
      const response = await fetch(`${API_URL}/books`);
      if (!response.ok) {
        throw new Error(`Failed to get book: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("This is the getUser error: ", err);
    }
  },
  getBook: async () => {
    try {
      const response = await fetch(`${API_URL}/books`);
      if (!response.ok) {
        throw new Error(`Failed to get book: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("This is the getUser error: ", err);
    }
  },
  createBook: async () => {
    try {
      const response = await fetch(`${API_URL}/books`);
      if (!response.ok) {
        throw new Error(`Failed to get book: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("This is the getUser error: ", err);
    }
  },
  getCharacters: async () => {
    try {
      const response = await fetch(`${API_URL}/books`);
      if (!response.ok) {
        throw new Error(`Failed to get book: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("This is the getUser error: ", err);
    }
  },
  createCharacter: async () => {
    try {
      const response = await fetch(`${API_URL}/books`);
      if (!response.ok) {
        throw new Error(`Failed to get book: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("This is the getUser error: ", err);
    }
  },
  editCharacter: async () => {
    try {
      const response = await fetch(`${API_URL}/books`);
      if (!response.ok) {
        throw new Error(`Failed to get book: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("This is the getUser error: ", err);
    }
  },
};

export default apiFetch;
