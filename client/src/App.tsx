import "./App.css";

// import state management components
// import useGlobalContext from "./hooks/useGlobalContext";
// import { ActionTypes } from "./context/GlobalContext";

//import components
import Header from "./components/layout/Header";
import DevPanel from "./components/layout/DevPanel";
// import StoryPanel from "./components/layout/StoryPanel";
import MainDiv from "./components/layout/MainDiv";

function App() {
  // const { state,  } = useGlobalContext();
  // const isOpen = state.showStoryPanel

  return (
    <>
      <Header />
      {/* {isOpen && <StoryPanel />} */}
      <DevPanel />
      <MainDiv />
    </>
  );
}

export default App;
