import { useEffect, useState } from "react";
import Country from "./Country";
import "./style/Countries.css"

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,area,population")
      .then((res) => res.json())
      .then((data) => setCountries(data));
      
  }, []);
  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <h4>Visited Countries: </h4>
      <div className="country-style">
        {countries.map((country) => (
          <Country key={country.cca3}  country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
