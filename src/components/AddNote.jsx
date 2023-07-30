import React from "react";
import { useContext } from "react";
import { useState } from "react";
import NoteContext from "../context/notes/NoteContext";
function AddNote() {
  const context = useContext(NoteContext);
  let { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tags: "General",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tags);
    setNote({
      title: "",
      description: "",
      tags: "General",
    });
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
              value={note.title}
              onChange={onChange}
              minLength={5}
              required
            />
            <div id="emailHelp" className="form-text">
              Minimum 5 characters
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
              value={note.description}
              onChange={onChange}
              minLength={5}
              required
            />
            <div id="emailHelp" className="form-text">
              Minimum 5 characters
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              name="tags"
              value={note.tags}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled={note.title.length < 5 || note.description.length < 5}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNote;
