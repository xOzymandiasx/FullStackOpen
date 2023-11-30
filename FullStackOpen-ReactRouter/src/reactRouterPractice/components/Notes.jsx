import { Link } from 'react-router-dom'

const Notes = ({notes}) => {
  return (
    <>
    <h1>Notes</h1>
    
    {notes.map(item => <li key={item.id}><Link to={`/notes/${item.id}`}>{item.content}</Link></li>)}
    </>

  )
}

export default Notes