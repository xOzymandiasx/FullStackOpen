import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const SimilApp1b15 = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content data={course} />
      <Total data={course}/>
    </div>
  );
};

export default SimilApp1b15;
