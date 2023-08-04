import { useSelector } from "react-redux";
import EachAnecdote from "./EachAnecdote";

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.sort((a, b) => b.votes - a.votes));

  return (
    <ul>
      {anecdotes.map((item, index) => <EachAnecdote key={index} data={item} />)}
    </ul>
  )
}

export default AnecdoteList