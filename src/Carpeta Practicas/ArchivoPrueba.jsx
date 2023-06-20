import axios from "axios";
import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import noteService from "./Services/notes";
import Notification from "./Notification";
import "./styles/index.css";
import Footer from "./Footer";
import { UserForm } from "./UserForm";
import NoteForm from "./NoteForm";

const noteInitialState = {content: ""};

const ArchivoPrueba = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(noteInitialState);
  const [showAll, setShowAll] = useState(true);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const baseUrl = "http://localhost:3001/api/notes";

  useEffect(() => {
    noteService.getAll()
    .then(res => setNotes(res));
  }, []);

  useEffect(() => {
    const loggedUserJSON  = window.localStorage.getItem(loggedNoteappUser);
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token);
    };
  }, []);
  

  const toggleImportance = async (id) => {
    const note = notes.find(item => item.id === id);
    const changedNote = {...note, important: !note.important };
    const {data} = await axios.put(`${baseUrl}/${id}`, changedNote)
     .catch(error => {
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    });
    setNotes(notes.map(item => item.id === data.id ? data : item));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const createdNote = await noteService.create(newNote);
    console.log(createdNote);
    setNotes(notes.concat(createdNote));
    setNewNote(noteInitialState);
  };
  
  return (
  <div>
    <h1>Notes</h1>
    <Notification message={errorMessage} />
    {user === null && <UserForm login={{user, setUser}} setErrorMessage={setErrorMessage}/>}
    {user !== null && 
      <div>
        <p>{user.name} logged-in</p>
        <NoteForm note={{newNote, setNewNote}} handleSubmit={handleSubmit}/>
      </div>}
    <ul>
      {notes.map(item => <Notes key={item.id} note={item} toggleImportance={toggleImportance} />)}
    </ul>
    <Footer />
  </div>
  );
};

export default ArchivoPrueba;
