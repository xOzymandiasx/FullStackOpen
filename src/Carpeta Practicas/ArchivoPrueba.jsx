import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Notes from "./Notes";
import noteService from "./Services/notes";
import Notification from "./Notification";
import "./styles/index.css";
import Footer from "./Footer";
import { UserForm } from "./UserForm";
import NoteForm from "./NoteForm";
import Togglable from "./Togglable";

const ArchivoPrueba = () => {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const noteFormRef  = useRef();
  const baseUrl = "http://localhost:3001/api/notes";

  useEffect(() => {
    noteService.getAll()
    .then(res => setNotes(res));
  }, []);

  useEffect(() => {
    const loggedUserJSON  = window.localStorage.getItem("loggedNoteappUser");
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
  
  return (
  <div>
    <h1>Notes</h1>
    <Notification message={errorMessage} />
    {user === null && <Togglable buttonLabel="Login"><UserForm props={{user, setUser, setErrorMessage }} /></Togglable>}
    {user !== null && 
      <div>
        <p>{user.name} logged-in</p>
        <Togglable buttonLabel="new note" ref={noteFormRef}><NoteForm props={{notes, setNotes, noteFormRef}} /></Togglable> 
      </div>}
    <ul>
      {notes.map(item => <Notes key={item.id} note={item} toggleImportance={toggleImportance} />)}
    </ul>
    <Footer />
  </div>
  );
};

export default ArchivoPrueba;
