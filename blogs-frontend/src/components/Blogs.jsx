import { useState } from "react";

const Blogs = ({ blog }) => {
  const [hideDisplay, setHideDisplay] = useState(false);

  const {title, author, id, url, likes} = blog;

  const changeDisplay = () => setHideDisplay(!hideDisplay);

  return (
    <>
    <h3>{title} <button onClick={changeDisplay}>View</button></h3> 
    <ul style={{listStyle: "none", padding: 0, display: hideDisplay ? "" : "none"}}>
      <li>{url}</li>
      <li>{likes}</li>
      <li>{author}</li>
    </ul>
    </>
    
  );
};

export default Blogs;