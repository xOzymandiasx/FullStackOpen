import React from "react";

const CountryCard = ({ data }) => {
  console.log(data);
  const { name, capital, population, languages } = data[0];

  // const renderLanguages = () => {
  //   for (let language in languages) {
  //     return (
  //       <><ul>{languages[language]}</ul></>
  //     )
  //   }
  // }
  for (let language in languages) {
    let list = document.querySelector(".languages-list")
    let newUl = document.createElement("li");
    newUl.textContent = languages[language];
    list.appendChild(newUl);
  }

  return (
    <div>
      <h2>{name.common}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>

      <h3>Languages</h3>

      <ul className="languages-list">
        {/* {data.map(item => {
          for(let language in item.languages) {
            console.log(item.languages[language])
            
          }
        })} */}
      </ul>
    </div>
  );
};

export default CountryCard;
