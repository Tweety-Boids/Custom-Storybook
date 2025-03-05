// ??? what type is character? an id?
interface createBookRequest {
  title: string;
  artStyle: string; // maybe dropdown
  author: string;
  character: string; // array of characters
  genre: string; // dropdown 
  setting: string;
  plot: string; 
}

interface createCharacterRequest { // confirm with Jeremy
    name: string; 
    pronouns: string;  //drop down to other
    catchPhrase: string; 
    specialTalent: string;
    // physical attributes
    hairColor: string;
    eyeColor: string; 

}

export type { createBookRequest, createCharacterRequest };
