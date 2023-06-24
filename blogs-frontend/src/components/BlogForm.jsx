import { useState } from "react";
import blogService from "../services/blogService";

const initialBlog = {
  title: "",
  author: "",
  url: "",
};

const BlogForm = ({ actualUser }) => {
  const [blog, setBlog ] = useState(initialBlog);

  const {user, setUser} = actualUser;

  const handleChange = e => setBlog({...blog, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    const createdBlog = await blogService.create(blog);
    const {title, author, id} = createdBlog;
    setUser(user.blogs.concat({title, author, id}));
    setBlog(initialBlog);
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