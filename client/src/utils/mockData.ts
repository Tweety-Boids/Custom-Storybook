const chihiroImg = "/assets/protags/protag3.jpeg";
const noFaceImg = "/assets/protags/protag1.jpeg";

export const mockBookForPostRequest = {
  title: "Spirited Away",
  author: "Hayao Miyazaki",
  setting: "Spirit World", // Updated to reflect the film's setting
  plot: "A young girl, Chihiro, must navigate the Spirit World to save her parents from a curse.",
  characters: ["Chihiro", "No-Face", "Haku", "Yubaba"],
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

export const mockGeneratedStory: string[] = [
  // ... existing code ...
];


export const classicChildrenBooks = [
  {
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    setting: "Max's Bedroom/Fantasy Island",
    plot: "A mischievous young boy named Max is sent to bed without dinner and imagines sailing to an island where he becomes king of the Wild Things.",
    characters: ["Max", "The Wild Things"],
    artStyle: "Picture Book",
    genre: "Fantasy",
  },
  {
    title: "Charlotte's Web",
    author: "E.B. White",
    setting: "Zuckerman's Farm",
    plot: "A spider named Charlotte helps save her friend Wilbur the pig from being slaughtered by writing messages in her web.",
    characters: ["Charlotte", "Wilbur", "Fern", "Templeton"],
    artStyle: "Classic Illustration",
    genre: "Children's Literature",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    setting: "Hogwarts School of Witchcraft and Wizardry",
    plot: "An orphaned boy discovers he's a wizard and begins his journey at a magical school while uncovering the truth about his parents' death.",
    characters: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Albus Dumbledore"],
    artStyle: "Novel",
    genre: "Fantasy",
  },
  {
    title: "Aladdin",
    author: "Traditional/Disney Adaptation",
    setting: "Agrabah",
    plot: "A street urchin finds a magical lamp containing a genie and uses his wishes to win the heart of a princess while facing the evil vizier Jafar.",
    characters: ["Aladdin", "Jasmine", "Genie", "Jafar"],
    artStyle: "3D Model",
    genre: "Fantasy Adventure",
  },
  {
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    setting: "Wonderland",
    plot: "A young girl falls through a rabbit hole into a fantastical world filled with peculiar creatures and bizarre experiences.",
    characters: ["Alice", "Mad Hatter", "White Rabbit", "Queen of Hearts"],
    artStyle: "Neon Punk",
    genre: "Fantasy",
  },
  {
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    setting: "Misselthwaite Manor, Yorkshire",
    plot: "A spoiled orphan girl discovers a hidden garden and helps restore it and her sickly cousin to health.",
    characters: ["Mary Lennox", "Colin Craven", "Dickon", "Martha"],
    artStyle: "Neon Punk",
    genre: "Children's Literature",
  },
  {
    title: "The Jungle Book",
    author: "Rudyard Kipling",
    setting: "Indian Jungle",
    plot: "A human boy named Mowgli is raised by wolves in the jungle and learns life lessons from various animal mentors.",
    characters: ["Mowgli", "Baloo", "Bagheera", "Shere Khan"],
    artStyle: "Analog Film",
    genre: "Adventure",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    setting: "Middle-earth",
    plot: "A hobbit named Bilbo Baggins joins a group of dwarves on an epic quest to reclaim their mountain home from a fearsome dragon.",
    characters: ["Bilbo Baggins", "Gandalf", "Thorin Oakenshield", "Smaug"],
    artStyle: "comic-book",
    genre: "Fantasy",
  },
];


/*
Picture Books (Ages 3-7):
"Where the Wild Things Are" by Maurice Sendak
"The Very Hungry Caterpillar" by Eric Carle
"Goodnight Moon" by Margaret Wise Brown
"The Gruffalo" by Julia Donaldson
"Green Eggs and Ham" by Dr. Seuss
Early Chapter Books (Ages 6-9):
"Magic Tree House" series by Mary Pope Osborne
"Junie B. Jones" series by Barbara Park
"Frog and Toad" series by Arnold Lobel
"Charlotte's Web" by E.B. White
"The Fantastic Mr. Fox" by Roald Dahl
Middle Grade Books (Ages 8-12):
"Harry Potter" series by J.K. Rowling
"Percy Jackson" series by Rick Riordan
"Wonder" by R.J. Palacio
"Bridge to Terabithia" by Katherine Paterson
"The One and Only Ivan" by Katherine Applegate
Classic Children's Novels:
"The Lion, the Witch and the Wardrobe" by C.S. Lewis
"A Wrinkle in Time" by Madeleine L'Engle
"The Hobbit" by J.R.R. Tolkien
"Matilda" by Roald Dahl
"The Secret Garden" by Frances Hodgson Burnett
These books are known for their:
Engaging storytelling
Rich character development
Important life lessons
Beautiful illustrations (especially in picture books)
Enduring appeal across generations
*/