
import React from 'react';
import './Card.css';

const Card = ({ business }) => {
  return (
    <div className='card'>
      <h3>{business}</h3>
    </div>
  )
}

export default Card;