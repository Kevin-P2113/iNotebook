import React from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
const About = () => {

  const props = useContext(NoteContext);
  return (
    <div>This is about component and owner is {props.name}</div>
  )
}

export default About