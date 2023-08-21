import { useReducer } from "react";
import { CounterContext } from "./context/CounterContext";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;

    case "DEC":
      return state - 1;

    case "ZERO":
      return 0;

    default:
      return state;
  }
};

const CounterMain = () => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={[counter, counterDispatch]}>
      <div>
        <h1>CounterMain</h1>

        <h2>{counter}</h2>

        <button onClick={() => counterDispatch({ type: "INC" })}>+</button>
        <button onClick={() => counterDispatch({ type: "DEC" })}>-</button>
        <button onClick={() => counterDispatch({ type: "ZERO" })}>0</button>
      </div>
    </CounterContext.Provider>
  );
};

export default CounterMain;
