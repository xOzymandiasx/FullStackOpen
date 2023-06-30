import { useState } from "react";
import blogService from "../services/blogService";

const initialBlog = {
  title: "",
  author: "",
  url: "",
};

const BlogForm = ({ setUser, setNotification }) => {
  const [blog, setBlog ] = useState(initialBlog);

  const handleChange = e => setBlog({...blog, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const {title, author, id} = await blogService.create(blog);
      const blogUser = JSON.parse(localStorage.getItem("loggedBlogUser"));
      const newUser = {...blogUser, blogs: [...blogUser.blogs, {title, author, id}]}
      localStorage.setItem("loggedBlogUser", JSON.stringify(newUser));
      setUser(newUser);
      setNotification({state: true, notColor: "green", message: title, author: author});
      setTimeout(() => {
        setNotification({state: null, notColor: null, message: null, author: null});
      }, 4000);  
      setBlog(initialBlog);
    }catch(error) {
      console.log(error);
    }
  };

  return (
    <form style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}} onSubmit={handleSubmit}>
      <label htmlFor="title">Title 
        <input type="text" name="title" value={blog.title} onChange={handleChange}/>
      </label>
      <label htmlFor="author">Author 
        <input type="text" name="author" value={blog.author} onChange={handleChange}/>
      </label>
      <label htmlFor="url">Url 
        <input type="text" name="url" value={blog.url} onChange={handleChange}/>
      </label>
      <button type="submit">Create</button>
    </form>
  )
}

export default BlogForm