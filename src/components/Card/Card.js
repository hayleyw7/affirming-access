
import React from 'react';
import './Card.css';

const Card = ({ name, street, city, state, distance }) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{street}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{distance}</p>
    </div>
  )
}

export default Card;