import { useSelector } from "react-redux";
import EachAnecdote from "./EachAnecdote";

const AnecdoteList = () => {
  //*Utilizo el spread operator porque redux-toolkit "freezea" mi estado(que seria anecdotes);
  const anecdotes = useSelector(({anecdotes}) => [...anecdotes].sort((a, b) => b.votes - a.votes));

  return (
    <ul>
      {anecdotes.map((item, index) => <EachAnecdote key={index} data={item} />)}
    </ul>
  );
};

export default AnecdoteList;