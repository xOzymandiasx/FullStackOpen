import { useMutation, useQueryClient } from "react-query";
import { createAnecdote } from "../services/requests";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();

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
    if (content.trim().length <= 5) return alert("The anecdote must have a minimum of 5 characters");
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
