import axios from "axios";
import React, { useEffect, useState } from "react";

const ArchivoPrueba = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/notes")
      .then(res => setNotes(res.data));
  }, []);
  

  return (
  <div>

  </div>
  );
};

export default ArchivoPrueba;
