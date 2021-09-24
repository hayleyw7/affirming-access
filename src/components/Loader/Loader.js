import React from 'react'
import './Loader.css';
import loaderIcon from './loader.jpeg'

const Loader = () => {
  return (
    <div className='loader-container'>
      <h2 className='loader-heading'>Loading Restrooms</h2>
      <img
        alt='Loading icon'
        className='loader-icon'
        src={loaderIcon}
      ></img>  
    </div>
  )
}

export default Loader;