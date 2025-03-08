import { mockHumanCharacterForPostRequest, mockFantasyCharacterForPostRequest, mockBookForPostRequest, classicChildrenBooks } from "./mockData";
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
            api.createBook(classicChildrenBooks[5]);
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
            api.createCharacter(mockHumanCharacterForPostRequest);
          }}
        >
          POST /characters
        </button>
      </div>
    </>
  );
};

export default DevPanel;
