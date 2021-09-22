import React from 'react';
import Card from '../Card/Card';
import './Reservations.css';

const Reservations = ({ reservations, cancelReservation }) => {
  const reservationCards = reservations.map(reservation => {
    return (
      <Card
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}        
        id={reservation.id}
        key={reservation.id}
        cancelReservation={cancelReservation}   
      />
    )
  })
  return (
    reservationCards
  )  
}

export default Reservations;