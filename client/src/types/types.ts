// ??? what type is character? an id?
interface createBookRequest {
  title: string;
  art_style: string;
  author: string;
  character: string;
  genre: string;
  setting: string;
}

interface createCharacterRequest {
    name: string
}

export type { createBookRequest, createCharacterRequest };
