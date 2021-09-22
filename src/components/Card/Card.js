
import React from 'react';
import './Card.css';

const Card = ({ name, street, city, state, distance }) => {

  const distanceRounded = distance.toFixed(2);
  
  return (
    <div className='card'>
      <h3 className='businessName'>{name}</h3>
      <p>{street}</p>
      <p>{city}, {state}</p>
      <p>{distanceRounded} mi</p>
    </div>
  )
}

export default Card;