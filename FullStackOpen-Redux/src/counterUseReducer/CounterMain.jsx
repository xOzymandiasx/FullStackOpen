import Button from "./Button";
import { userCounterValue } from "./context/CounterContext";

const CounterMain = () => {
  const counter = userCounterValue();

  return (
    <div>
      <h1>CounterMain</h1>

      <h2>{counter}</h2>

      <Button label="+" type="INC" />
      <Button label="-" type="DEC" />
      <Button label="0" type="ZERO" />
    </div>
  );
};

export default CounterMain;
