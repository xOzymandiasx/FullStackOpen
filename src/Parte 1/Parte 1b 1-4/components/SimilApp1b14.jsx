import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./total";

const SimilApp1b14 = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
    <Header course={course}/>
    <Content data={parts}/>
    <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  );
};

export default SimilApp1b14;
