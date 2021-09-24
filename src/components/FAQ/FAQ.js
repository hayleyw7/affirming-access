import React from 'react';
import './FAQ.css';
import { Link } from 'react-router-dom';

const FAQ = () => {

  return (
    <div className='faq-page'>    
      <section className='faq-card'>  

        <h3 className='faq-title'>FAQ</h3>  

        <p className='question'>
          What is this app?
        </p>

        <p className='answer'>
          This app, Affirming Access (AA), provides safe and affirming restroom access for transgender, intersex, and gender nonconforming individuals.
        </p>

        <p className='question'>
          From where's this data?
        </p>

        <p className='answer'>
          All of this data is updating every search through an open-source API created by <a href={"https://www.refugerestrooms.org/"}>Refuge Restrooms (RR)</a>. Their first 4500 entries were added from the Safe2Pee database, and the list is now kept updated by RR volunteers. If you know of a safe or gender-neutral restroom, please add it to their database, and the changes will also be on AA once approved by RR.
        </p>        

        <p className='question'>
          Why is this important?
        </p>

        <p className='answer'>
          According to respondents of the <a href={"https://www.ustranssurvey.org/"}>US Transgender Survey</a>:
          <ul>
            <li>59% avoided using a restroom for fear of confrontation</li>
            <li>31% avoided eating/drinking to avoid restrooms</li>
            <li>24% had their presence in the restroom questioned</li>
            <li>12% had been harassed, attacked, or sexually assaulted in a restroom</li>
            <li>9% had been denied restroom access</li>
            <li>8% developed a kidney issue or UTI from avoiding restrooms</li>
          </ul>
        </p>      

      </section>

      <Link
        to={'/'}
        key='1'  
      >

        <button
          className='home-btn'
          alt='Find Safe Restrooms Now'
        >Find Safe Restrooms Now</button>

      </Link>   

    </div>
)
}

export default FAQ;