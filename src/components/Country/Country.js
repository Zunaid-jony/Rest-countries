import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flag, region} = props.country; // ata  props.name porps.flag na diye a abae deya jai
    // props dite onn jaiga thake data anlam and country bar
    // bar na diye aktabe props are  sathe diye dialm
    console.log(props.country);
    return (
       
        <div className='country container'>
              <img src={flag} alt=''/>
             <p> <span> Region: {region}</span></p>
            <h3> This is: {name}</h3>
            <h5> This is: {props.capital} population: {props.population}</h5>
            <h6></h6> 


    
        </div>
        
    );
};

export default Country;