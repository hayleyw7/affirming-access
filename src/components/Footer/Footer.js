import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='footer-bar'>
      <p className='euphoria'>You deserve gender euphoria.</p>
      
      <Link
        to={'/faq'}
        key='1'  
      >

        <button
          className='faq-btn'
          alt='FAQ'
        ><p className='faq-text'>FAQ</p></button>

      </Link> 


    </div>
  )
}

export default Footer;