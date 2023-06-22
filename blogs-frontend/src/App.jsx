import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import blogService from "./services/blogService";

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
  

  return (
    <>
      <h1>Log in to de app</h1>
      <LoginForm setUser={setUser}/>
    </>
  )
}

export default App
