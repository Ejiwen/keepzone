import React, { useState } from "react"
import Layout from "./layout/Layout"
import NoteInput from "./components/NoteInput"
import Note from "./components/Note"

const App = () => {
  const [notes, setNotes] = useState([])

  const noteAdd = (newNote) => {
    setNotes((prevNote) => {
      return [...prevNote, newNote]
    })
    console.log(notes.length)
  }

  return (
    <Layout>
      <NoteInput noteAdd={noteAdd} />
      {notes.map((note) => (
        <Note note={note} />
      ))}
    </Layout>
  )
}

export default App
