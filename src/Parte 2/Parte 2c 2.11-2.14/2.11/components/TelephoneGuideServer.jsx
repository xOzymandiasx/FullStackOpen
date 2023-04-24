import React, { useEffect, useState } from "react";
import ThelephoneForm from "./ThelephoneForm";
import TelephonePersons from "./TelephonePersons";
import ThelephoneFilterForm from "./ThelephoneFilterForm";
import axios from "axios";
import tgs from "../services/telephoneGuideServices";

const newNameInitialState = {name: "", number: ""};

const TelephoneGuideServer = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState(newNameInitialState);

  useEffect(()=> {
    tgs.getAll()
      .then(res => setPersons(res));
  }, []);

  const handleChange = (e) => {
    setNewName({...newName, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let existingName = persons.find(item => item.name === newName)
    existingName 
     ? alert(`${existingName.name} is alredy add`) 
     : tgs.create(newName)
      .then(res => setPersons(persons.concat(res)));    
    setNewName(newNameInitialState);
  };

  const handleFilterChange= (e)=> {
    tgs.getAll()
     .then(res => setPersons(res.filter(item => item.name.startsWith(capitalizeWord(e.target.value)))));
  };

  const capitalizeWord = (data) => {
    let wordToCapitalize = data.split(" ");
    wordToCapitalize.forEach((word, index) => wordToCapitalize[index] = word.charAt(0).toUpperCase() + word.slice(1) );
    wordToCapitalize = wordToCapitalize.join(" ");
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

export default TelephoneGuideServer;
