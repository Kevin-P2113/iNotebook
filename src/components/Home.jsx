import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Notes from "./Notes";
import AddNote from "./AddNote";

function Home() {
  const context = useContext(NoteContext);
  let { notes, setNotes } = context;

  return (
    <>
      <div className="container my-5">
        <AddNote></AddNote>
        <Notes></Notes>
      </div>
    </>
  );
}

export default Home;
