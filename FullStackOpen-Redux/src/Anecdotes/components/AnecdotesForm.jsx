import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdotesReducer";

const AnecdotesForm = () => {
  const dispatch = useDispatch();

  const handleAnecdoteForm = e => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    e.target.anecdote.value = "";
    dispatch(createAnecdote(anecdote));
  };

  return (
    <form onSubmit={handleAnecdoteForm}>
      <input type="text" name="anecdote"/>
      <button type="submit">Add anecdote</button>
    </form>
  );
};

export default AnecdotesForm;