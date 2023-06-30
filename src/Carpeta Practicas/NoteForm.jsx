import { useState } from "react";
import noteService from "./Services/notes"

const noteInitialState = {content: ""};

const NoteForm = ({ props }) => {
  const [newNote, setNewNote] = useState(noteInitialState);

  const {notes, setNotes, noteFormRef} = props

  const handleChange = (e) => {
    setNewNote({...newNote, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    noteFormRef.current.toggleVisibility()
    const createdNote = await noteService.create(newNote);
    console.log(createdNote);
    setNotes(notes.concat(createdNote));
    setNewNote(noteInitialState);
  };

  return (
    <div>
      <h2>Create a new note</h2>

    <form onSubmit={handleSubmit}>
      <input type="text" name='content' placeholder='Add a note' value={newNote.content} onChange={handleChange}/>
      <button type='submit'>Add</button>
    </form>

    </div>
  );
};

export default NoteForm;