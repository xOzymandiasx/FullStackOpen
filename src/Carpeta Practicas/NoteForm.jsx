import React from 'react'

const NoteForm = ({ note, handleSubmit }) => {
  const {newNote, setNewNote} = note;

  const handleChange = (e) => {
    setNewNote({...newNote, [e.target.name]: e.target.value});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='content' placeholder='Add a note' value={newNote.content} onChange={handleChange}/>
      <button type='submit'>Add</button>
    </form>
  );
};

export default NoteForm;