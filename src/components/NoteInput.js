import React, { useState } from "react"

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
    noteAdd(note)
  }

  return (
    <form onSubmit={sendHandler}>
      <input
        onChange={handlerFn}
        name="title"
        value={note.title}
        type="text"
        placeholder="add new note"
      />
      <textarea
        onChange={handlerFn}
        name="body"
        value={note.body}
        rows="4"
        cols="50"
      ></textarea>
      <button type="submit"> ADD </button>
    </form>
  )
}

export default NoteInput
