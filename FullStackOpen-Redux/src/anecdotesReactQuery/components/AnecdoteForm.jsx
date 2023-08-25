import { useMutation, useQueryClient } from "react-query";
import { createAnecdote } from "../services/requests";
import { notificationDispatch } from "../context/NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const dispatch = notificationDispatch();

  //*Notification handler(contextApi, useReducer);
  const showNotification = (message, display="block") => {
    dispatch({type: "MESSAGE", payload: {message, display}});
    setTimeout(() => {
      dispatch({type: "MESSAGE", payload: {message: "", display: "none"}});
    }, 4000);
  };

  //*Codigo para crear la nota;
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData("anecdotes");
      queryClient.setQueryData("anecdotes", anecdotes.concat(newAnecdote));
    }
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    if (content.trim().length <= 5){
      showNotification("The anecdote must have a minimum of 5 characters");
      return;
    };
    newAnecdoteMutation.mutate({content, votes: 0});
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
