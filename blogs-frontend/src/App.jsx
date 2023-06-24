import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import blogService from "./services/blogService";
import Blogs from "./components/Blogs";
import BlogForm from "./components/BlogForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedBlogUser = localStorage.getItem("loggedBlogUser");
    if (loggedBlogUser) {
      const user = JSON.parse(loggedBlogUser);
      setUser(user);
      blogService.setToken(user.token);
    }; 
  }, []);
  
  
  const userLogOut = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <>
      {user === null && 
      <>
      <h1>Log in to de app</h1>
      <LoginForm setUser={setUser}/>
      </>   
      }
      {user !== null && 
      <div>
        <h2>List of blogs</h2>
        <p>Welcome {user.username} <button onClick={userLogOut}>Log out</button></p> 
        {user.blogs.map(item => <Blogs key={item.id} blog={item}/>)}
        <h3>Create new blog</h3>
        <BlogForm actualUser={{user, setUser}}/>
      </div>
      }
    </>
  )
}

export default App
