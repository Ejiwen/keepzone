import React, { useState } from "react"
import Layout from "./layout/Layout"
import NoteInput from "./components/NoteInput"
import Notes from "./components/Notes"
import "./css/style.css"

const App = () => {
  const [notes, setNotes] = useState([])

  const noteAdd = (newNote) => {
    setNotes((prevNote) => {
      return [...prevNote, newNote]
    })
  }

  const deleteHandler = (id) => {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => index !== id)
    })
  }

  return (
    <Layout>
      <NoteInput noteAdd={noteAdd} />
      <Notes notes={notes} deleteNote={deleteHandler} />
    </Layout>
  )
}

export default App
