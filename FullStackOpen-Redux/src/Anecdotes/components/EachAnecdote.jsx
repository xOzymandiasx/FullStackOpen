import { useDispatch } from "react-redux";
import { voteUp } from "../reducers/anecdotesReducer";

const EachAnecdote = ({data, index}) => {
  const dispatch = useDispatch();
  const {anecdote, votes} = data;

  const handleVoteClick = id => {
    dispatch(voteUp(id));
  };

  return (
    <>
    <li>{anecdote}</li>
    <li>Has {votes} <button onClick={() => handleVoteClick(index)}>Vote</button></li>
    </>
  );
};

export default EachAnecdote;