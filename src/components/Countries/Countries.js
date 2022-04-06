import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => setCountries(data))
        //46.5 number hosie ok

    }, [])
    return (
        <div>
              <h1> Hello From Countries: {countries.length}</h1>
             <div className='conuntries-container container'>
             {
                  countries.map( country=> <Country
                  key={country.capital}
                     country ={country}
                     name={country.name} 
                    capital ={country.capital} 
                    population={country.population}
                  
                  ></Country>)
              }
             </div>
        </div>
    );
};

export default Countries;