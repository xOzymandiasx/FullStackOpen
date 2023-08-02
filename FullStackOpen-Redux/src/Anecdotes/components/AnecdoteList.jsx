import { useSelector } from "react-redux";
import EachAnecdote from "./EachAnecdote";

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state);

  return (
    <ul>
      {anecdotes.map((item, index) => <EachAnecdote key={index} data={item} index={index}/>)}
    </ul>
  )
}

export default AnecdoteList