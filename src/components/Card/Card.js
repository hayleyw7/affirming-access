import React from 'react';
import './Card.css';

const Card = ({ name, street, city, state, distance }) => {
  
  return (
    <div className='card' alt='card'>

      <h3 className='business-name capitalize' alt='business'>{name}</h3>

      <p className='street capitalize' alt='address'><a href={`https://maps.google.com/?q=${name}_${street}_${city}_${state}`}>{street}</a></p>

      <p className='city-state capitalize' alt='city and state'>{city}, {state}</p>

      <p className='distance' alt='miles away'>{distance} mi</p>
      
    </div>
  )
}

export default Card;