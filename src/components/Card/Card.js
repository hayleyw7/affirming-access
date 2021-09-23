import React from 'react';
import './Card.css';
var normalize = require('us-states-normalize');

const Card = ({ name, street, city, state, distance, id }) => {

  const streetFormatted = street.split('North ').join('N ').split('north ').join('N ').split('South ').join('S ').split('south ').join('S ').split('East ').join('E ').split('east ').join('E ').split('West ').join('W ').split('west ').join('W ').split('treet').join('t').split('and').join('&').split('venue').join('ve').split(' road').join(' Rd').split(' Road').join(' Rd')
  
  const cityFormatted = city.split(' ').join('');
  const stateFormatted = normalize(state);
  const distanceFormatted = distance.toFixed(2);
  
  return (
    <div className='card'>
      <h3 className='business-name capitalize'>{name}</h3>
      <p className='street capitalize'><a href={`https://maps.google.com/?q=${name}_${streetFormatted}_${cityFormatted}_${stateFormatted}`}>{streetFormatted}</a></p>
      <p className='city-state capitalize'>{cityFormatted}, {stateFormatted}</p>
      <p className='distance'>{distanceFormatted} mi</p>
    </div>
  )
}

// https://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003

export default Card;