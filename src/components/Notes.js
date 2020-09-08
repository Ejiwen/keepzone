import React from "react"
import Note from "./Note"

const Notes = ({ notes, deleteNote }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <Note key={index} id={index} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  )
}

export default Notes
