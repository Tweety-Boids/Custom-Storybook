// import react hooks
// import context

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  // if context is null, throw an error
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  // return the context value which contains the global state and dispatch function
  return context;
};

export default useGlobalContext;