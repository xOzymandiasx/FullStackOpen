import { userCounterDispatch } from "./context/CounterContext";

const Button = ({ label, type }) => {

  const dispatch = userCounterDispatch();

  return( 
  <button onClick={() => dispatch({type})}>
    {label}
  </button>);
};

export default Button;
