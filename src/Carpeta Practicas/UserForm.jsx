import React, { useState } from 'react';
import loginService from "./Services/login";
import noteService from "./Services/notes";
import Proptypes from "prop-types"

export const UserForm = ({ props }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const {user, setUser, setErrorMessage } = props;

  const handleLogin = async e => {
    e.preventDefault();
    try{
      const user = await loginService.login({username, password});
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user)); 
      noteService.setToken(user.token)
      setUser(user);
      setUsername("");
      setPassword("");
    }catch(error){
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div>
      <h2>Login</h2>

    <form  onSubmit={handleLogin}>
      <input type="text" name='username' placeholder='Username' value={username} onChange={({ target }) => setUsername(target.value)}/>
      <input type="password" name='password' placeholder='Password' value={password} onChange={({ target }) => setPassword(target.value)}/>
      <button type='submit'>Login</button>
    </form>
    </div>
  );
};