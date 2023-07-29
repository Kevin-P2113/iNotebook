import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:3000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //fetch all notes

  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Auth-Token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOTIwMzdkNWM5NGRiY2ZmYjYwMDY4In0sImlhdCI6MTY4OTg1NDAwN30.hdRIp0pdRq3bD0QRk93KB39qOBvMI5z8OBLoWunSSCg",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tags) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Auth-Token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOTIwMzdkNWM5NGRiY2ZmYjYwMDY4In0sImlhdCI6MTY4OTg1NDAwN30.hdRIp0pdRq3bD0QRk93KB39qOBvMI5z8OBLoWunSSCg",
      },
      body: JSON.stringify({ title, description, tags }),
    });
    const json = await response.json();
    console.log(json);
  };
  // Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Auth-Token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOTIwMzdkNWM5NGRiY2ZmYjYwMDY4In0sImlhdCI6MTY4OTg1NDAwN30.hdRIp0pdRq3bD0QRk93KB39qOBvMI5z8OBLoWunSSCg",
      },
    });
    const json = await response.json()
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id != id;
    });
    setNotes(newNotes);
  };
  // Edit a note

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "applicatoin/json",
        "Auth-Token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOTIwMzdkNWM5NGRiY2ZmYjYwMDY4In0sImlhdCI6MTY4OTg1NDAwN30.hdRIp0pdRq3bD0QRk93KB39qOBvMI5z8OBLoWunSSCg",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    for (let i = 0; i < notes.length; i++) {
      if (notes[i]._id == id) {
        notes[i].title = title;
        notes[i].description = description;
        notes[i].tag = tag;
      }
    }
  };
  // View a note

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
