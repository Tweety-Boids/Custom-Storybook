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

export interface Characters {
  name: string;
  pronouns: string;
  catch_phrase: string;
  personality: string;
  special_talent: string;
  hair_color: string;
  eye_color: string;
  physical_description: string;
}


export type StoryMetadata = {
  id: string;
  title: string;
  story: string;
  characters: string[];
  genre: string;
  author: string;
};
