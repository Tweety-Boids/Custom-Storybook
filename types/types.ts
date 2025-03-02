export type ServerError = {
    log: string;
    status: number;
    message: { err: string };};


export type ServerApi = {
    version: "1";
    strict: boolean;
    deprecationErrors: boolean;
};

export interface UserPreferenceBody {
  title: string;
  art_style: string;
  author: string;
  character: string;
  genre: string;
  setting: string;
}


export type StoryMetadata = {
  id: string;
  title: string;
  story: string;
  characters: string[];
  genre: string;
  author: string;
};
