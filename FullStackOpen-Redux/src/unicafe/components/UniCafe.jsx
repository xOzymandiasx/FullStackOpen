import React, { useState } from "react";
import Button from "./Button";
import Statics from "./Statics";
import { createStore } from "redux";
import { unicafeReducer } from "../reducer/unicafeReducer";

const UniCafe = () => {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const store = createStore(unicafeReducer);

  const handleFeedbackClick = (e) => {
    e.target.innerText === "Good"
      ? store.dispatch({type: "GOOD"})
      : e.target.innerText === "Neutral"
        ? store.dispatch({type: "OK"})
        : store.dispatch({type: "BAD"})
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button buttonName="Good" handleClick={handleFeedbackClick}/>
      <Button buttonName="Neutral" handleClick={handleFeedbackClick}/>
      <Button buttonName="Bad" handleClick={handleFeedbackClick}/>
      <h2>Statics</h2>
      <p>good: {store.getState().good}</p>
      <p>ok: {store.getState().ok}</p>
      <p>bad: {store.getState().bad}</p>
      {/* <Statics data={{good, neutral, bad}}/> */}
    </div>
  );
};

export default UniCafe;
