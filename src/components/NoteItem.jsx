import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

function NoteItem(props) {
  const { note, updateNote } = props;
  const { deleteNote } = useContext(NoteContext);
  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              updateNote(note);
            }}
          >
            Update
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
