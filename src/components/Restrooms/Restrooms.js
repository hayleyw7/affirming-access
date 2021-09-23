import React from 'react';
import Card from '../Card/Card';
import './Restrooms.css';

const Restrooms = ({ restrooms }) => {
  const restroomCards = restrooms.map(restroom => {
    return (
      <div className='restrooms-page'>
        <h2>Recommended Restrooms Near You</h2>
        <div className='restrooms-container'></div>
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
    restroomCards
  )  
}

export default Restrooms;