import * as api from "../../utils/apiRequests";

const DevPanel = () => {
  const mockBook = {
    title: "string",
    author: "string",
    setting: "string", // ?? coffee shop vs Seattle
    plot: "string",
    character: "string", // array of characters
    artStyle: "string",
    genre: "string",
  };

  const mockCharacter = {
    name: "string",
    pronouns: "string",
    catchPhrase: "string",
    specialTalent: "string",
    // physical attributes
    hairColor: "string",
    eyeColor: "string",
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
