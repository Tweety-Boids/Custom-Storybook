import chihiroImg from '../assets/protags/protag3.jpeg'; // Adjust the path as necessary
import noFaceImg from '../assets/protags/protag1.jpeg'; // Adjust the path as necessary


export const mockBookForPostRequest = {
  title: "Spirited Away",
  author: "Hayao Miyazaki",
  setting: "Spirit World", // Updated to reflect the film's setting
  plot: "A young girl, Chihiro, must navigate the Spirit World to save her parents from a curse.",
  characters: [41,42,43],
  artStyle: "Anime",
  genre: "Fantasy",
};

export const mockHumanCharacterForPostRequest = {
  name: "Chihiro", // Updated character name
  age: 10,
  pronouns: "she/her",
  hairColor: "Brown", // Updated hair color
  eyeColor: "Brown", // Updated eye color
  species: "Human",
  physicalDescription:
    "Chihiro has long, straight brown hair that she often wears in a simple ponytail. She has large, expressive brown eyes that reflect her emotions. Chihiro typically wears a pink and white outfit, consisting of a short-sleeved shirt and a skirt, along with a pair of white socks and simple shoes. Her appearance is youthful and innocent, embodying the spirit of a brave girl navigating a fantastical world.",
  personality:
    "Chihiro is determined, brave, and compassionate. She shows resilience in the face of challenges and cares deeply for her friends and family, often putting their needs before her own.",
  specialTalent: "Bravery in the face of adversity",
  catchPhrase: "I will find a way to save them!",
};

export const mockFantasyCharacterForPostRequest = {
  name: "No-Face", // Character name
  age: "Unknown", // No-Face does not have a defined age
  pronouns: "they/them", // Neutral pronouns
  hairColor: "None", // No-Face does not have hair
  eyeColor: "Black", // Typically depicted with black eyes
  species: "Spirit", // No-Face is a spirit
  physicalDescription:
    "No-Face is a mysterious spirit with a featureless, mask-like face. They are often seen wearing a dark cloak that obscures their form. No-Face has large, expressive eyes that can change based on their emotions, reflecting their complex nature. Their appearance is both haunting and intriguing, embodying the essence of a spirit that can consume and mimic the traits of others.",
  personality:
    "No-Face is enigmatic and often lonely, seeking connection with others. They can be both benevolent and malevolent, reflecting the influence of those around them. No-Face's actions are driven by a desire for companionship and acceptance, making them a complex character in the story.",
  specialTalent: "Can consume and mimic the traits of others.", // Reflects No-Face's ability
  catchPhrase: "I want to be with you.", // A line that reflects their desire for connection
};

export const mockBooksFromGetRequest = [
  {
    id: 40,
    title: "Spirited Away",
    author: "Hayao Miyazaki",
    setting: "Spirit World",
    plot: "A young girl, Chihiro, must navigate the Spirit World to save her parents from a curse.",
    characters: [41, 42, 43],
    artStyle: "Anime",
    genre: "Fantasy",
  },
  {
    id: 41,
    title: "Princess Mononoke",
    author: "Hayao Miyazaki",
    setting: "Feudal Japan, Forests and Iron Town",
    plot: "A young prince named Ashitaka embarks on a journey to find a cure for a curse and becomes embroiled in a conflict between the forest gods and humans exploiting the land.",
    characters: [41, 42, 43],
    artStyle: "Anime",
    genre: "Fantasy, Adventure",
  },
];

export const mockCharactersFromGetRequest = [
  {
    id: 41,
    name: "Chihiro", // Updated character name
    age: 10,
    pronouns: "she/her",
    species: "Human",
    profileImg: chihiroImg, 
  },
  {
    id: 42,
    name: "No-Face",
    age: "Unknown",
    pronouns: "they/them",
    species: "Unknown",
    profileImg: noFaceImg, 

  },
];
