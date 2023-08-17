import { useQuery } from "react-query";
import AnecdoteForm from "./AnecdoteForm";
import Notification from "./Notification";
import { getAnecdotes } from "../services/requests";


const AnecdotesApp = () => {

  const result = useQuery("anecdotes", getAnecdotes, {
    retry: 1,
  });

  if (result.isLoading) return <Notification props="Is loading..."/>
  if (result.isError) return <Notification props= "Server error"/>

  const anecdotes = result.data;

  return (
    <div>
      <h3>Anecdote app</h3>

      {/* <AnecdoteForm /> */}

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
