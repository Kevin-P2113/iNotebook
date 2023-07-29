import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64b94cd5848d757a574f1800",
      user: "64b92037d5c94dbcffb60068",
      title: "this is the updated title",
      description: "this is the updated description",
      tag: "General",
      date: "2023-07-20T15:03:49.146Z",
      __v: 0,
    },
    {
      _id: "64c29a4cadb7840029bcee28",
      user: "64b92037d5c94dbcffb60068",
      title: "this is another note",
      description: "and this is the description of the note",
      tag: "General",
      date: "2023-07-27T16:24:44.831Z",
      __v: 0,
    },
    {
      _id: "64c29a4cadb7840029bcee28",
      user: "64b92037d5c94dbcffb60068",
      title: "this is another note",
      description: "and this is the description of the note",
      tag: "General",
      date: "2023-07-27T16:24:44.831Z",
      __v: 0,
    },
    {
      _id: "64c29a4cadb7840029bcee28",
      user: "64b92037d5c94dbcffb60068",
      title: "this is another note",
      description: "and this is the description of the note",
      tag: "General",
      date: "2023-07-27T16:24:44.831Z",
      __v: 0,
    },
    {
      _id: "64c29a4cadb7840029bcee28",
      user: "64b92037d5c94dbcffb60068",
      title: "this is another note",
      description: "and this is the description of the note",
      tag: "General",
      date: "2023-07-27T16:24:44.831Z",
      __v: 0,
    },
    {
      _id: "64c29a4cadb7840029bcee28",
      user: "64b92037d5c94dbcffb60068",
      title: "this is another note",
      description: "and this is the description of the note",
      tag: "General",
      date: "2023-07-27T16:24:44.831Z",
      __v: 0,
    },
  ];

  const [notes,setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
