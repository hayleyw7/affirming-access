import React from 'react';
import './FAQ.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const FAQ = () => {

  return (
    <div>    
      <Header />
          <Link
            to={'/'}
            key='1'  
          >

            <button
              className='home-btn'
            >Search For Safe Restrooms Now</button>

          </Link>          
    </div>
)
}

export default FAQ;