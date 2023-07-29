import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
function Notes() {
  const context = useContext(NoteContext);
  let { notes, setNotes } = context;

  return (
    <div className="row">
      <h1>Your notes</h1>
      {notes.map((note) => {
        return <NoteItem note={note}></NoteItem>;
      })}
    </div>
  );
}

export default Notes;
