import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='footer-bar'>
      <h4 className='euphoria'>You deserve gender euphoria.</h4>
      
      <Link
        to={'/faq'}
        key='1'  
      >

        <button
          className='faq-btn'
        ><h4>FAQ</h4></button>

      </Link> 


    </div>
  )
}

export default Footer;