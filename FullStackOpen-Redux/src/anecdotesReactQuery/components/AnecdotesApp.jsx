import { useMutation, useQuery, useQueryClient } from "react-query";
import AnecdoteForm from "./AnecdoteForm";
import Notification from "./Notification";
import { getAnecdotes, updateVotes } from "../services/requests";


const AnecdotesApp = () => {
  const queryClient = useQueryClient();

  const updateVoteMutation = useMutation(updateVotes, {
    onSuccess: (upAnecdote) => {
      const anecdotes = queryClient.getQueryData("anecdotes");
      queryClient.setQueryData("anecdotes", anecdotes.map(item => item.id === upAnecdote.id ? upAnecdote : item));
    }
  });

  const handleVote = (anecdote) => {
    updateVoteMutation.mutate({...anecdote, votes: anecdote.votes + 1});
  };

  const result = useQuery("anecdotes", getAnecdotes, {
    retry: 1,
  });

  const anecdotes = result.data;

  if (result.isLoading) return <Notification props="Is loading..."/>
  if (result.isError) return <Notification props= "Server error"/>

  return (
    <div>
      <h3>Anecdote app</h3>
      <AnecdoteForm />
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdotesApp;
