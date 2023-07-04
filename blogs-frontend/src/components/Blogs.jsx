import axios from "axios";
import { useState } from "react";

const Blogs = ({ blog, props }) => {
  const [hideDisplay, setHideDisplay] = useState(false);

  const {title, author, id, user, url, likes} = blog;
  const {actualUser, setActualUser} = props;

  const changeDisplay = () => setHideDisplay(!hideDisplay);

  const handleLike = async id => {
    const blogToChange = actualUser.blogs.find(item => item.id === id);
    const changedBlog = {...blogToChange, likes: blogToChange.likes + 1, user};
    const {data} = await axios.put(`http://localhost:3001/api/blogs/${id}`, changedBlog);
    const blogUser = JSON.parse(localStorage.getItem("loggedBlogUser"));
    const actualizedBlog = {...blogUser, blogs: blogUser.blogs.map(item => item.id === data.id ? data : item)};
    localStorage.setItem("loggedBlogUser", JSON.stringify(actualizedBlog));
    setActualUser(actualizedBlog);
    console.log(actualizedBlog);
  };

  return (
    <>
    <h3>{title} <button onClick={changeDisplay}>View</button></h3> 
    <ul style={{listStyle: "none", padding: 0, display: hideDisplay ? "" : "none"}}>
      <li>{url}</li>
      <li>{likes} <button onClick={()=> handleLike(id)}>Like</button></li>
      <li>{author}</li>
    </ul>
    </>
    
  );
};

export default Blogs;