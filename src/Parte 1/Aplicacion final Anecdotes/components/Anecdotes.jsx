import React, { useState } from "react";
import Button from "./Button";

const votesInitialState = [0, 0, 0, 0, 0, 0];

const Anecdotes = () => {
  const [random, setRandom] = useState(0);
  const [votes, setVotes] = useState(votesInitialState);
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleRandomAnecdote = () => {
    setRandom(getRandomInt(6));
  };

  const handleAnecdoteVote = () => {
    let newVote = [...votes];
    newVote[random] += 1;
    setVotes(newVote);
  };

  const getMaxArray = (array) => {
    let max = 0;
    let anecdoteIndex = 0;
    array.forEach((item, index) => {
      if (item > max) {
        max = item;
        anecdoteIndex = index;
      }
    });
    return { index: anecdoteIndex, max };
  };

  return (
    <div>
      <h1>Anecdotes</h1>
      <h2>Anecdotes</h2>
      <p>{anecdotes[random]}</p>
      <p>votes {votes[random]}</p>
      <Button
        buttonName="Get random anecdote"
        handleClick={handleRandomAnecdote}
      />
      <Button buttonName="Vote" handleClick={handleAnecdoteVote} />
      <h2>Anecdote with most votes</h2>
      {getMaxArray(votes).max === 0 
      ? <p>0 votes yet</p>
      : <>
          <p>{anecdotes[getMaxArray(votes).index]}</p>
          <p>Votes {getMaxArray(votes).max}</p>
        </>
      }
    </div>
  );
};

export default Anecdotes;
