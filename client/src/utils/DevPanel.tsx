import * as api from "./apiRequests";

const DevPanel = () => {


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
