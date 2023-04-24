import axios from "axios";
import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import noteService from "./Services/notes";

const ArchivoPrueba = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll()
    .then(res => setNotes(res));
  }, []);

  const toggleImportance = async (id) => {
    const note = notes.find(item => item.id === id);
    const changedNote = {...note, important: !note.important };
    const {data} = await axios.put(`http://localhost:5000/notes/${id}`, changedNote);
    setNotes(notes.map(item => item.id === data.id ? data : item));
  };
  

  return (
  <div>
    {notes.map(item => <Notes key={item.id} note={item} toggleImportance={toggleImportance} />)}
  </div>
  );
};

export default ArchivoPrueba;
