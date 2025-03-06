import useGlobalContext from "../../hooks/useGlobalContext";
import { ActionTypes } from "../../context/GlobalContext";

const Header = () => {
  const { state, dispatch } = useGlobalContext();

  const toggleStoryPanel = () => {
    dispatch({
      type: ActionTypes.TOGGLE_STORY_PANEL,
      payload: !state.showStoryPanel,
    });
  };

  return (
    <div className="header-wrapper">
      <h1>Fable</h1>
      {/* <div>
        Search library: <input type="text" />
      </div> */}
      {/* <button onClick={toggleStoryPanel}>Toggle Story Panel</button>
      <button onClick={toggleStoryPanel}>Toggle Story Panel</button> */}
    </div>
  );
};

export default Header;
