import { useDispatch } from "react-redux";
import { voteUp } from "../reducers/anecdotesReducer";
import { showNotification } from "../reducers/notificationReducer";

const EachAnecdote = ({ data }) => {
  const dispatch = useDispatch();
  const {content, votes} = data;

  const handleVoteClick = id => {
    dispatch(voteUp(id));
    dispatch(showNotification({message: `You votted ${anecdote}`, showDisplay: true}));
    setTimeout(() => {
      dispatch(showNotification({message: "", showDisplay: false}));
    }, 4000);
  };

  return (
    <>
    <li>{content}</li>
    <li>Has {votes} <button onClick={() => handleVoteClick(data.id)}>Vote</button></li>
    </>
  );
};

export default EachAnecdote;