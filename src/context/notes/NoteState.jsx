import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64b94cd15848d757a574f1800",
      user: "64b92037d5c94dbcffb60068",
      title: "this is the updated title",
      description: "this is the updated description",
      tag: "General",
      date: "2023-07-20T15:03:49.146Z",
      __v: 0,
    },
    {
      _id: "64c29a42cadb7840029bcee28",
      user: "64b92037d5c94dbcffb60068",
      title: "this is another note",
      description: "and this is the description of the note",
      tag: "General",
      date: "2023-07-27T16:24:44.831Z",
      __v: 0,
    },
    {
      _id: "64c29a43cadb7840029bcee28",
      user: "64b92037d5c94dbcffb60068",
      title: "this is another note",
      description: "and this is the description of the note",
      tag: "General",
      date: "2023-07-27T16:24:44.831Z",
      __v: 0,
    },
    {
      _id: "64c29a44cadb7840029bcee28",
      user: "64b92037d5c94dbcffb60068",
      title: "this is another note",
      description: "and this is the description of the note",
      tag: "General",
      date: "2023-07-27T16:24:44.831Z",
      __v: 0,
    },
    {
      _id: "64c29a4c5adb7840029bcee28",
      user: "64b92037d5c94dbcffb60068",
      title: "this is another note",
      description: "and this is the description of the note",
      tag: "General",
      date: "2023-07-27T16:24:44.831Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = (title, description, tags) => {
    const newNote = {
      _id: "64c29a4c6adbd7840029bcdfee28",
      user: "64b92037d5c94dbcffb60068",
      title: title,
      description: description,
      tag: tags,
      date: "2023-07-27T16:24:44.831Z",
      __v: 0,
    };
    setNotes(notes.concat(newNote));
  };
  // Delete a note
  const deleteNote = () => {};
  // Edit a note

  const editNote = () => {};
  // View a note

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
