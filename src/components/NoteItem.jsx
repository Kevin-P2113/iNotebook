import React from "react";

function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger mx-2">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
