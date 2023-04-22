import axios from "axios";
import React, { useEffect, useState } from "react";
import Notes from "./Notes";

const ArchivoPrueba = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/notes")
      .then(res => setNotes(res.data));
  }, []);

  const toggleImportance = async (id) => {
    const note = notes.find(item => item.id === id);
    const changedNote = {...note, important: !note.important };
    const {data} = await axios.put(`http://localhost:5000/notes/${id}`, changedNote);
    setNotes(notes.map(item => item.id === data.id ? data : item));
  };
  

  return (
  <div>
    {notes.map(item => <Notes key={notes.id} note={item} toggleImportance={toggleImportance} />)}
  </div>
  );
};

export default ArchivoPrueba;
