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
  pronouns: string;
  catch_phrase: string;
  personality: string;
  special_talent: string;
  // physical attributes
  hair_color: string;
  eye_color: string;
  physical_description: string;
}

export type { createBookRequest, createCharacterRequest };