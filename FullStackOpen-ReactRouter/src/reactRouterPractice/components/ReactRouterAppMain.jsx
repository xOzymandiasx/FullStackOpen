import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Notes from './Notes';
import Note from './Note';

const ReactRouterAppMain = () => {
  //*Forma "casera" de aplicar ReactRouter
  // const [page, setPage] = useState("home");
  // const toPage = (page) => (e) => {
  //   e.preventDefault()
  //   setPage(page);
  // };
  // const content = () => {
  //   if (page === "home") {
  //     return <Home />;
  //   } else if (page === "users") {
  //     return <Users />;
  //   } else if (page === "notes") {
  //     return <Notes />;
  //   }
  // };

  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen'
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen'
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas'
    }
  ])

  return (
    <Router >
      <div>
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/users">Users</Link>
      </div>

      <Routes>
        <Route path='/notes' element={<Notes notes={notes}/>}/>
        <Route path='/note/:id' element={<Note notes={notes}/>}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  );
};

export default ReactRouterAppMain;