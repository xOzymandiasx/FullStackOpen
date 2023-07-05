import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import blogService from "./services/blogService";
import Blogs from "./components/Blogs";
import BlogForm from "./components/BlogForm";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";

function App() {
  const [actualUser, setActualUser] = useState(null);
  const [notification, setNotification] = useState({state: null, notColor: null, message: null, author: null});

  useEffect(() => {
    const loggedBlogUser = localStorage.getItem("loggedBlogUser");
    if (loggedBlogUser) {
      const user = JSON.parse(loggedBlogUser);
      user.blogs.sort((a, b) => b.likes - a.likes);
      setActualUser(user);
      blogService.setToken(user.token);
    }; 
  }, []);
  
  const userLogOut = () => {
    localStorage.clear();
    setActualUser(null);
  };

  return (
    <>
      {actualUser === null && 
      <>
      <h1>Log in to de app</h1>
      {notification.state === true && <Notification notification={notification}/>}
      <LoginForm setUser={setActualUser} setNotification={setNotification}/>
      </>   
      }
      {actualUser !== null && 
      <div>
        <h2>List of blogs</h2>

        {notification.state === true && <Notification notification={notification}/>}

        <p>Welcome {actualUser.username} <button onClick={userLogOut}>Log out</button></p>

        {actualUser.blogs.map(item => <Blogs key={item.id} blog={item} props={{actualUser, setActualUser}}/>)}

        <h3>Create new blog</h3>
        <Togglable button="New blog">
          <BlogForm setUser={setActualUser} setNotification={setNotification}/>
        </Togglable>
        
      </div>
      }
    </>
  )
}

export default App
