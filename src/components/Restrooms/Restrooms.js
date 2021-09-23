import React from 'react';
import Card from '../Card/Card';
import './Restrooms.css';
// import { Link } from 'react-router-dom';

const Restrooms = ({ restrooms }) => {

  // const refreshPage = () => {
  //   window.location.reload();
  // }

  const restroomCards = restrooms.map(restroom => {
    return (
      <Card
        name={restroom.name}
        street={restroom.street}
        city={restroom.city}
        state={restroom.state}   
        distance={restroom.distance}                
        id={restroom.id}
        key={restroom.id} 
      />
    )
  })

  return (
    <div>
      <h2>Safe Restrooms Near You</h2>

      <div className='restrooms-container'>    
        {restroomCards}
      </div>
      
        <button
          className='start-over-btn'
          onClick={event => window.location.reload(event)}       
        >Start Over</button>

    </div>
  )  
}

export default Restrooms;