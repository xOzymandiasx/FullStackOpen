import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdotesReducer";
import { showNotification } from "../reducers/notificationReducer";
import anecdotesServices from "../services/anecdotes";


const AnecdotesForm = () => {
  const dispatch = useDispatch();

  const handleAnecdoteForm = async e => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    e.target.anecdote.value = "";
    dispatch(createAnecdote(anecdote));
    dispatch(showNotification({message: `Anecdote ${anecdote} add to the list.`, showDisplay: true}));
    //Funcion para activar/desactivar notrificacion;
    setTimeout(() => {
      dispatch(showNotification({message: "", showDisplay: false}));
    }, 4000);
  };

  return (
    <form onSubmit={handleAnecdoteForm}>
      <input type="text" name="anecdote"/>
      <button type="submit">Add anecdote</button>
    </form>
  );
};

export default AnecdotesForm;