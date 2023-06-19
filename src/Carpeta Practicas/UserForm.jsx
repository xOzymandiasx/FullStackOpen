import React, { useState } from 'react';
import loginService from "./Services/login";
import noteService from "./Services/notes";

export const UserForm = ({ login, setErrorMessage}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const {user, setUser} = login;

  const handleLogin = async e => {
    e.preventDefault();
    try{
      const user = await loginService.login({username, password});
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
    <form onSubmit={handleLogin}>
      <input type="text" name='username' placeholder='Username' value={username} onChange={({ target }) => setUsername(target.value)}/>
      <input type="password" name='password' placeholder='Password' value={password} onChange={({ target }) => setPassword(target.value)}/>
      <button type='submit'>Login</button>
    </form>
  );
};
