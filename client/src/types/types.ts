// ??? what type is character? an id?
interface createBookRequest {
  title: string;
  author: string;
  setting: string; // ?? coffee shop vs Seattle
  plot: string;
  characters: string; // array of characters
  artStyle: string;
  genre: string;
}

interface createCharacterRequest {
  // confirm with Jeremy
  name: string;
  age: number;
  pronouns: string;
  catchPhrase: string;
  specialTalent: string;
  // physical attributes
  hairColor: string;
  eyeColor: string;
}

export type { createBookRequest, createCharacterRequest };
