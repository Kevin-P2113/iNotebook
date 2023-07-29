import React from "react";
import { useContext } from "react";
import { useState } from "react";
import NoteContext from "../context/notes/NoteContext";
function AddNote() {
  const context = useContext(NoteContext);
  let { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tags: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tags);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-5">
        <h1>Add your notes</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              name="title"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              add sample text here.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNote;
