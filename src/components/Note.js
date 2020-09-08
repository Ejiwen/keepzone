import React from "react"

const Note = ({ note, id, deleteNote }) => {
  const deleteHandler = () => {
    deleteNote(id)
  }

  return (
    <div>
      <h1> {note.title} </h1>
      <p> {note.body} </p>
      <button onClick={deleteHandler}>DELETE</button>
    </div>
  )
}

export default Note
