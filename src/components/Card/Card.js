
import React from 'react';
import './Card.css';

const Card = ({ name, street, city, state, distance }) => {

  const distanceRounded = distance.toFixed(2);
  const cityNoSpace = city.split(' ').join('')
  const stateCaps = state.toUpperCase()
  
  return (
    <div className='card'>
      <h3 className='businessName capitalize'>{name}</h3>
      <p className='capitalize'>{street}</p>
      <p className='capitalize'>{cityNoSpace}, {stateCaps}</p>
      <p>{distanceRounded} mi</p>
    </div>
  )
}

export default Card;