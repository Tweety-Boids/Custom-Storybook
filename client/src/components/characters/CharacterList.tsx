import { mockCharactersFromGetRequest } from "../../utils/mockData";

const CharacterList = () => {

  return (
    <>
<label>Cast:</label>
        <div className="character-list-wrapper my-4 flex">
        {mockCharactersFromGetRequest &&
          mockCharactersFromGetRequest.map((character) => {
            const { id, name, profileImg } = character;
            return (
              <div key={id} className="character-wrapper h-20 w-20">
                <div className="h-14 w-14 bg-sky-900 rounded-full">
                  <img src={profileImg} className="rounded-full"/>
                </div>
                <div className="character-name">{name}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CharacterList;
