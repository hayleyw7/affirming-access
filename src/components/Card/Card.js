import React from 'react';
import './Card.css';
var normalize = require('us-states-normalize');

const Card = ({ name, street, city, state, distance }) => {

  const distanceFormatted = distance.toFixed(2);
  const cityFormatted = city.split(' ').join('');
  const stateFormatted = normalize(state);
  
  return (
    <div className='card'>
      <h3 className='businessName capitalize'>{name}</h3>
      <p className='capitalize'>{street}</p>
      <p className='capitalize'>{cityFormatted}, {stateFormatted}</p>
      <p>{distanceFormatted} mi</p>
    </div>
  )
}

export default Card;