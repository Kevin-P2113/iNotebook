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
        <h1>This is my react app</h1>
        <Outlet></Outlet>
      </NoteState>
    </>
  );
}

export default App;
