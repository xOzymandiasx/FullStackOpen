import React, { useEffect, useState } from "react";
import ThelephoneForm from "./ThelephoneForm";
import TelephonePersons from "./TelephonePersons";
import ThelephoneFilterForm from "./ThelephoneFilterForm";
import tgs from "../services/telephoneGuideServices";

const newNameInitialState = { name: "", number: "" };

const TelephoneGuideServer = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState(newNameInitialState);

  useEffect(() => {
    tgs.getAll().then((res) => setPersons(res));
  }, []);

  const handleChange = (e) => {
    setNewName({ ...newName, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let existingName = persons.find((item) => item.name === newName.name);
    if (existingName) {
      let confirm = window.confirm(
        `${existingName.name} is alredy add, replace the old number with a new one?`
      );
      if (confirm) {
        let person = persons.filter((item) => item.name === newName.name);
        let personToUpdate = { ...newName, id: person[0].id };
        tgs
          .update(personToUpdate)
          .then((res) =>
            setPersons(persons.map((item) => (item.id === res.id ? res : item)))
          );
      }
    } else {
      tgs.create(newName).then((res) => setPersons(persons.concat(res)));
      setNewName(newNameInitialState);
    }
    // existingName
    //   ? alert(`${existingName.name} is alredy add`)
    //   : tgs.create(newName).then((res) => setPersons(persons.concat(res)));
    // setNewName(newNameInitialState);
  };

  const handleFilterChange = (e) => {
    tgs
      .getAll()
      .then((res) =>
        setPersons(
          res.filter((item) =>
            item.name.startsWith(capitalizeWord(e.target.value))
          )
        )
      );
  };

  const deletePerson = (id, name) => {
    let confirm = window.confirm(`Delete ${name}?`);
    if (confirm) {
      tgs.del(id).then((res) => console.log(res));
      setPersons(persons.filter((item) => item.id !== id));
    } else {
      return;
    }
  };

  const capitalizeWord = (data) => {
    let wordToCapitalize = data.split(" ");
    wordToCapitalize.forEach(
      (word, index) =>
        (wordToCapitalize[index] =
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    );
    wordToCapitalize = wordToCapitalize.join(" ");
    return wordToCapitalize;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ThelephoneFilterForm handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <ThelephoneForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newName={newName}
      />
      <h2>Numbers</h2>
      <ul>
        {persons.map((item, index) => (
          <TelephonePersons
            key={index}
            data={item}
            deletePerson={deletePerson}
          />
        ))}
      </ul>
    </div>
  );
};

export default TelephoneGuideServer;
