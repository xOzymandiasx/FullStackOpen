import axios from "axios";
import React, { useState } from "react";
import CountryForm from "./CountryForm";
import CountryCard from "./CountryCard";

const CountrySearchApi = () => {
  const [countryDb, setCountryDb] = useState([]);

  const capitalizeWord = (words) => {
    let capitalizedWord = words.split(" ");
    capitalizedWord.forEach((item, index) => {
      capitalizedWord[index] = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });
    capitalizedWord = capitalizedWord.join(" ");
    return capitalizedWord;
  };

  const handleOnChangeFilter = async (e) => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    if (e.target.value === "") {
      setCountryDb([]);
      return;
    };
    setCountryDb(data.filter((item) => item.name.common.startsWith(capitalizeWord(e.target.value))));
  };

  const showCountry = (index) => {
    setCountryDb([countryDb[index]]);
  };

  return (
    <div>
      <h1>Search country</h1>
      <CountryForm handleOnChangeFilter={handleOnChangeFilter}/>
      {countryDb.length > 10 
      ? <p>Too many mathces</p> 
      : countryDb.length === 1 
        ? <CountryCard data={countryDb}/>
        : countryDb.map((item, index) => <p key={index}>{item.name.common} <button onClick={()=> showCountry(index)}>Show</button></p>)
      }
    </div>
  );
};

export default CountrySearchApi;
