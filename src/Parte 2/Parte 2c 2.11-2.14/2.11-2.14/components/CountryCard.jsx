const CountryCard = ({ data }) => {
  console.log(data);
  const { name, capital, population, languages, flags } = data[0];
  const {alt, png} = flags;
  const languagesArray = Object.values(languages);

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
    </div>
  );
};

export default CountryCard;
