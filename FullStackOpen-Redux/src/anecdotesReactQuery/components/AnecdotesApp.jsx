import { useMutation, useQuery, useQueryClient } from "react-query";
import AnecdoteForm from "./AnecdoteForm";
import Notification from "./Notification";
import { getAnecdotes, updateVotes } from "../services/requests";
import NotificationData from "./NotificationData";


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

  //*Estado de la aplicacion con reactQuery;
  const anecdotes = result.data;

  if (result.isLoading) return <NotificationData props="Is loading..."/>;
  if (result.isError) return <NotificationData props= "Server error"/>;

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
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
