import React from 'react'
import './Error.css';
import errorIcon from './error.png'

const Error = () => {
  return (
    <div className='error-container'>
      <h2 className='error-heading'>
        We've encountered an error in retrieving the page.
      </h2>
      <img
        alt='Error icon'
        className='error-icon'
        src={errorIcon}
      />  
    </div>
  )
}

export default Error;