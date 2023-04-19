import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CountrySearchApi = () => {
  const [countryDb, setCountryDb] = useState([]);

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
      .then(res => {
        setCountryDb(res.data)
      })
  }, [])

  return (
    <div>
      <h1>Search country</h1>
    </div>
  )
}

export default CountrySearchApi;