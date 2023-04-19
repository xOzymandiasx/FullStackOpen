import React from "react";

const TelephonePersons = ({ data }) => {
  const { name, number } = data;

  return (
    <>
      <li>Name: {name}</li>
      <li>Number: {number}</li>
    </>
  );
};

export default TelephonePersons;
