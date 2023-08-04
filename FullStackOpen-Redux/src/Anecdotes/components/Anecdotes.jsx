import AnecdoteList from "./AnecdoteList";
import AnecdotesForm from "./AnecdotesForm";

const Anecdotes = () => {

  return (
    <div>
      <h1>Anecdotes</h1>
      <AnecdotesForm />
      <AnecdoteList />
    </div>
  );
};

export default Anecdotes;