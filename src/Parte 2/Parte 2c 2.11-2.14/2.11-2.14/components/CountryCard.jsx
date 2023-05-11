import axios from "axios";
import { useEffect, useState } from "react";

const CountryCard = ({ data }) => {
  console.log(data);
  const [weather, setWeather] = useState([]);
  const { name, capital, population, languages, flags } = data[0];
  const {alt, png} = flags;
  const languagesArray = Object.values(languages);

  useEffect(()=> {
    getWeather();
  }, [])

  const getWeather = async () => {
    const {data} = await axios.get(`http://api.weatherstack.com/current?access_key=873a08373bfa91d96f0e08a0b7a28311&query=${capital}`);
    setWeather(data.request);
    console.log(data)
  };

  return (
    <div>
      <h2>{name.common}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>

      <h3>Languages</h3>

      <ul>
       {languagesArray.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <img src={png} alt={alt}/>
      <h3>Weather in {capital}</h3>

    </div>
  );
};

export default CountryCard;
