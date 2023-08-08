import AnecdoteList from "./AnecdoteList";
import AnecdotesForm from "./AnecdotesForm";
import Notification from "./Notification";

const Anecdotes = () => {

  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification />
      <AnecdotesForm />
      <AnecdoteList />
    </div>
  );
};

export default Anecdotes;