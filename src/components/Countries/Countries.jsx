import { useEffect, useState } from "react";
import Country from "./Country";
import "./style/Countries.css"

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,area,population")
      .then((res) => res.json())
      .then((data) => setCountries(data));

  }, []);
  const handleVisitedCountries = (country) => {
   setVisitedCountries([...visitedCountries, country]) 
  }

  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <h4>Visited Countries: {visitedCountries.length} </h4>
      <ul>
        {
         visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>) 
        }
      </ul>
      <div className="country-style">
        {countries.map((country) => (
          <Country key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
