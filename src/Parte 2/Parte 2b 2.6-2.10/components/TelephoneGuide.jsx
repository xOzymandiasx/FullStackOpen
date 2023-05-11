import React, { useState } from "react";
import ThelephoneForm from "./ThelephoneForm";
import TelephonePersons from "./TelephonePersons";
import ThelephoneFilterForm from "./ThelephoneFilterForm";

const personsInitialState = [
  { name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }
];
const newNameInitialState = {name: "", number: ""};

const TelephoneGuide = () => {
  const [persons, setPersons] = useState(personsInitialState);
  const [newName, setNewName] = useState(newNameInitialState);

  const handleChange = (e) => {
    setNewName({...newName, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let existingName = persons.find(item => item.name === newName)
    existingName ? alert(`${existingName.name} is alredy add`) : setPersons(persons.concat(newName));    
    setNewName(newNameInitialState);
  };

  const handleFilterChange= (e)=> {
    setPersons(personsInitialState.filter(item => item.name.startsWith(capitalizeWord(e.target.value))));
  };

  const capitalizeWord = (data) => {
    let wordToCapitalize = data.split(" ");
    wordToCapitalize.forEach((word, index) => wordToCapitalize[index] = word.charAt(0).toUpperCase() + word.slice(1) );
    wordToCapitalize = wordToCapitalize.join(" ");
    console.log(wordToCapitalize);
    return wordToCapitalize;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ThelephoneFilterForm handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <ThelephoneForm handleSubmit={handleSubmit} handleChange={handleChange} newName={newName}/>
      <h2>Numbers</h2>
      <ul>
        {persons.map((item, index) => (
          <TelephonePersons key={index} data={item} />
        ))}
      </ul>
    </div>
  );
};

export default TelephoneGuide;
