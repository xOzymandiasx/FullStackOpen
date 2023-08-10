import { useEffect } from "react";
import AnecdoteList from "./AnecdoteList";
import AnecdotesForm from "./AnecdotesForm";
import Notification from "./Notification";
import { useDispatch } from "react-redux";
import { initialAnecdotes } from "../reducers/anecdotesReducer";

const Anecdotes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(initialAnecdotes());
  }, [])

  return (
    <div>
      <h1>Anecdotes</h1>
      <AnecdotesForm />
      <Notification />
      <AnecdoteList />
    </div>
  );
};

export default Anecdotes;