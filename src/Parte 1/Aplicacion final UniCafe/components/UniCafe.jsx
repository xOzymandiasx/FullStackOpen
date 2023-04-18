import React, { useState } from "react";
import Button from "./Button";
import Statics from "./Statics";

const UniCafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackClick = (e) => {
    e.target.innerText === "Good"
      ? setGood(good + 1)
      : e.target.innerText === "Neutral"
        ? setNeutral(neutral + 1)
        : setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button buttonName="Good" handleClick={handleFeedbackClick}/>
      <Button buttonName="Neutral" handleClick={handleFeedbackClick}/>
      <Button buttonName="Bad" handleClick={handleFeedbackClick}/>
      <h2>Statics</h2>
      <Statics data={{good, neutral, bad}}/>
    </div>
  );
};

export default UniCafe;
