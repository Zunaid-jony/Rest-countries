import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props);
    return (
        <div className='one'>
            <h3> This is: {props.name}</h3>
            <h5> This is: {props.capital} population: {props.population}</h5>
            <h6></h6>
        </div>
    );
};

export default Country;