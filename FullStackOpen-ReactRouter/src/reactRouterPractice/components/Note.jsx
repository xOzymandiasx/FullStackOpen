import React from 'react'
import { useParams } from 'react-router-dom'

const Note = ({notes}) => {
  const id = useParams().id;
  const note = notes.find(item => item.id === Number(id));

  return (
    <>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div><strong>{note.important ? "important" : ""}</strong></div>
    </>
  )
}

export default Note