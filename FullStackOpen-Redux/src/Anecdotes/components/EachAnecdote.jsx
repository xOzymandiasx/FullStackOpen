import { useDispatch } from "react-redux";
import { vote } from "../reducers/anecdotesReducer";
import { setNotification, showNotification } from "../reducers/notificationReducer";

const EachAnecdote = ({ data }) => {
  const dispatch = useDispatch();
  const {content, votes} = data;

  const handleVoteClick = id => {
    dispatch(vote(id));
    dispatch(setNotification(`You votted ${content}`, 4000))
  };

  return (
    <>
    <li>{content}</li>
    <li>Has {votes} <button onClick={() => handleVoteClick(data.id)}>Vote</button></li>
    </>
  );
};

export default EachAnecdote;