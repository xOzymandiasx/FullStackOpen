import { useSelector } from "react-redux";

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state);

  return (
    <ul>
      {anecdotes.map((item, index) => <li key={index}></li>)}
    </ul>
  )
}

export default AnecdoteList