// ??? what type is character? an id?
interface createBookRequest {
  title: string;
  author: string;
  setting: string; // ?? coffee shop vs Seattle
  plot: string;
  character: string; // array of characters
  artStyle: string; 
  genre: string;
}

interface createCharacterRequest {
  // confirm with Jeremy
  name: string;
  pronouns: string; //drop down to other
  catchPhrase: string;
  specialTalent: string;
  // physical attributes
  hairColor: string;
  eyeColor: string;
}

export type { createBookRequest, createCharacterRequest };
