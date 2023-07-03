import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import blogService from "./services/blogService";
import Blogs from "./components/Blogs";
import BlogForm from "./components/BlogForm";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";

function App() {
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState({state: null, notColor: null, message: null, author: null});

  console.log(notification);
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
      {notification.state === true && <Notification notification={notification}/>}
      <LoginForm setUser={setUser} setNotification={setNotification}/>
      </>   
      }
      {user !== null && 
      <div>
        <h2>List of blogs</h2>

        {notification.state === true && <Notification notification={notification}/>}

        <p>Welcome {user.username} <button onClick={userLogOut}>Log out</button></p>

        {user.blogs.map(item => <Blogs key={item.id} blog={item} />)}

        <h3>Create new blog</h3>
        <Togglable button="New blog">
          <BlogForm setUser={setUser} setNotification={setNotification}/>
        </Togglable>
        
      </div>
      }
    </>
  )
}

export default App
