import React from "react";
import { Link } from "react-router-dom";

const Notes = ({ notes }) => {

  return (
    <>
      <div>Notes</div>
      <ul>
        {notes.map(item => <li key={item.id}><Link to={`/note/${item.id}`}>{item.content}</Link></li>)}
      </ul>
    </>
  );
};

export default Notes;
