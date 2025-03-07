interface createBookRequest {
  title: string;
  author: string;
  setting: string; // ?? coffee shop vs Seattle
  plot: string;
  characters: number[]; // array of character ids
  artStyle: string;
  genre: string;
}

interface createCharacterRequest {
  name: string;
  age: string | number;
  pronouns: string;
  // physical attributes
  hairColor: string;
  eyeColor: string;
  physicalDescription: string;
  // non-physical attributes
  personality: string;
  specialTalent: string;
  catchPhrase: string;
}

export type { createBookRequest, createCharacterRequest };