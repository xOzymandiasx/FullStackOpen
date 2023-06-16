import React from 'react';
import loginService from "./Services/login";

export const UserForm = ({userLogin, passwordLogin, login, setErrorMessage}) => {

  const {username, setUsername} = userLogin;
  const {password, setPassword} = passwordLogin;
  const {user, setUser} = login;

  const handleLogin = async e => {
    e.preventDefault();
    try{
      const user = await loginService.login({username, password});
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
