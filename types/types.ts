export type ServerError = {
    log: string;
    status: number;
    message: { err: string };
};

export type StoryMetadata = {
  id: string;
  title: string;
  story: string;
  characters: string[];
  genre: string;
  author: string;
};
