import React from 'react';
import './Card.css';
var normalize = require('us-states-normalize');

const Card = ({ name, street, city, state, distance }) => {

  const streetFormatted = street.split('North ').join('N ').split('north ').join('N ').split('South ').join('S ').split('south ').join('S ').split('East ').join('E ').split('east ').join('E ').split('West ').join('W ').split('west ').join('W ').split('treet').join('t').split('and').join('&').split('venue').join('ve').split(' road').join(' Rd').split(' Road').join(' Rd')
  const cityFormatted = city.split(' ').join('');
  const stateFormatted = normalize(state);
  const distanceFormatted = distance.toFixed(2);
  
  return (
    <div className='card'>
      <h3 className='businessName capitalize'>{name}</h3>
      <p className='capitalize'>{streetFormatted}</p>
      <p className='capitalize'>{cityFormatted}, {stateFormatted}</p>
      <p>{distanceFormatted} mi</p>
    </div>
  )
}

export default Card;