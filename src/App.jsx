import React from "react";
import ToDoApp from "./ToDOApp.jsx";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <ToDoApp />
      <ToastContainer />
    </>
  );
};

export default App;
