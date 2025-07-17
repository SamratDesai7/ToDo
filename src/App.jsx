import React from "react";
import ToDoApp from "./ToDOApp.jsx";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  return (
    <>
      <ToDoApp />
      <ToastContainer />
    </>
  );
};

export default App;
