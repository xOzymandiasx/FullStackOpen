import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Notes from "./Notes"
import Users from "./Users"
import Home from "./Home"
import { useState } from "react"
import Login from "./Login"
import Note from "./Note"

const ReactRouterAppMain = () => {
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
  ]);

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">Home</Link>
        <Link style={padding} to="/notes">Notes</Link>
        <Link style={padding} to="/users">Users</Link>
      </div>

      <Routes>
        <Route path="/notes/:id" element={<Note notes={notes}/>}/>
        <Route path="/notes" element={<Notes notes={notes}/>}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
    
  )
}

export default ReactRouterAppMain