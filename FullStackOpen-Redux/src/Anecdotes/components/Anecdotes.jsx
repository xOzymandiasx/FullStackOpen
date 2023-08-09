import { useEffect } from "react";
import AnecdoteList from "./AnecdoteList";
import AnecdotesForm from "./AnecdotesForm";
import Notification from "./Notification";
import anecdotesServices from "../services/anecdotes";
import { useDispatch } from "react-redux";
import { setAnecdotes } from "../reducers/anecdotesReducer";

const Anecdotes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   anecdotesServices.getAll()
    .then(res => dispatch(setAnecdotes(res)))
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