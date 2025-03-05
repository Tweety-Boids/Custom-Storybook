import * as api from "../../utils/apiRequests";

const DevPanel = () => {
    const mockBook = {
        title: "Spirited Away",
        author: "Hayao Miyazaki",
        setting: "Spirit World", // Updated to reflect the film's setting
        plot: "A young girl, Chihiro, must navigate the Spirit World to save her parents from a curse.",
        characters: "Chihiro, Haku, Yubaba, No-Face", // Updated characters
        artStyle: "Anime",
        genre: "Fantasy",
      };

  const mockCharacter = {
    name: "Chihiro", // Updated character name
    age: 10, 
    pronouns: "she/her",
    catchPhrase: "I will find a way to save them!", // Updated catchphrase
    specialTalent: "Bravery in the face of adversity", // Updated special talent
    hairColor: "Brown", // Updated hair color
    eyeColor: "Brown", // Updated eye color
  };

  return (
    <>
      <div>--DEV PANEL--</div>
      <div className="dev-panel-wrapper">
        <button
          onClick={() => {
            api.fetchBooks();
          }}
        >
          GET /books
        </button>

        <button
          onClick={() => {
            api.fetchBook(1);
          }}
        >
          GET /books/:id
        </button>

        <button
          onClick={() => {
            api.createBook(mockBook);
          }}
        >
          POST /books
        </button>

        <button
          onClick={() => {
            api.getCharacters();
          }}
        >
          GET /characters
        </button>
        <button
          onClick={() => {
            api.createCharacter(mockCharacter);
          }}
        >
          POST /characters
        </button>
      </div>
    </>
  );
};

export default DevPanel;
