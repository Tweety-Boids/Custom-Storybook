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
      <h1>--HEADER--</h1>
      <button onClick={toggleStoryPanel}>Toggle Story Panel</button>
    </div>
  );
};

export default Header;
