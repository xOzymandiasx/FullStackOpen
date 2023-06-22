import { useState } from "react";
import loginService from "../services/loginService";
import blogService from "../services/blogService";

const userLoginInitialState = {
  username: "",
  password: "",
};

const LoginForm = ({ setUser }) => {
  const [userLogin, setUserLogin] = useState(userLoginInitialState);

  const handleChange = e => {
    setUserLogin({...userLogin,[e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const loggedUser = await loginService.login(userLogin);
      window.localStorage.setItem("loggedBlogUser", JSON.stringify(loggedUser));
      blogService.setToken(loggedUser.token);
      setUser(loggedUser);
      setUserLogin(userLoginInitialState);
    }catch{
      console.warn("Wrong credential");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        <input type="text" name='username' placeholder='Username' onChange={handleChange} value={userLogin.username}/>
      </label>
      <label htmlFor="password">
        <input type="password" name='password' placeholder='Password' onChange={handleChange} value={userLogin.password}/>
      </label>
      <button type="submit">Log in</button>
    </form>
  )
}

export default LoginForm