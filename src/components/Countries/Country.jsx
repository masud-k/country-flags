import React, { useState } from 'react';
import "./style/Country.css"
const Country = ({country}) => {
    console.log(country)
    const {name, flags, area, capital, Population} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? "visited" : ""}`}>
            <img className='image' src={flags.png} alt="" />
            <div className='div-container'>
                <div>
                    <h5>Name: {name.common}</h5>
                    <p>Capital: {capital}</p>
                </div>
                <div>
                    <p>Area: {area}</p>
                    <p>Population: {Population}</p>
                </div>
            </div>
            <button onClick={handleVisited}>{visited ? "Visited" : "Mark as Visited"}</button>
        </div>
    );
};

export default Country;