import React from 'react';
import Card from '../Card/Card';
import './Restrooms.css';

const Restrooms = ({ restrooms }) => {
  const restroomCards = restrooms.map(restroom => {
    return (
      <div className='restrooms-container'>
        <Card
          name={restroom.name}
          street={restroom.street}
          city={restroom.city}
          state={restroom.state}   
          distance={restroom.distance}                
          id={restroom.id}
          key={restroom.id} 
        />
    </div>
    )
  })
  return (
    <div>
      <h2>Safe Restrooms Near You</h2>
      {restroomCards}
    </div>
  )  
}

export default Restrooms;