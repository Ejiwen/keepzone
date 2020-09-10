import React, { useState } from "react"
import AddIcon from "@material-ui/icons/Add"

const NoteInput = ({ noteAdd }) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  })

  const handlerFn = (e) => {
    const { name, value } = e.target

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      }
    })
  }

  const sendHandler = (e) => {
    e.preventDefault()
    console.log(e.target)
    noteAdd(note)
    setNote({
      title: "",
      body: "",
    })
  }

  return (
    <form onSubmit={sendHandler} className="formulaire">
      <input
        onChange={handlerFn}
        name="title"
        value={note.title}
        type="text"
        placeholder="Title"
      />
      <textarea
        onChange={handlerFn}
        name="body"
        value={note.body}
        rows="4"
        placeholder="Take note"
      ></textarea>
      <button type="submit">
        <AddIcon />
      </button>
    </form>
  )
}

export default NoteInput
