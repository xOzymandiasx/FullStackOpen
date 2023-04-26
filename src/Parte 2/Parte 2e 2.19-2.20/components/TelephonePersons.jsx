import React from "react";

const TelephonePersons = ({ data, deletePerson }) => {
  const { name, number, id } = data;

  return (
    <>
      <li style={{ listStyleType: "none" }}>
        Name: {name} Number: {number}{" "}
        <button onClick={() => deletePerson(id, name)}>Delete</button>
      </li>
    </>
  );
};

export default TelephonePersons;
