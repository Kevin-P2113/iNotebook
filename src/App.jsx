import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NoteState>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </NoteState>
    </>
  );
}

export default App;

// Note : props are read only and cannot be modified by child components that they are passed to
// to update a prop you have to send a method that updates the prop for the child
