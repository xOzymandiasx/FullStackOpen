import React from "react";

const Total = ({data}) => {

  const {parts} = data;
  let total = 0;
  parts.forEach(element => {
    total += element.exercises;
  });

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

export default Total;
