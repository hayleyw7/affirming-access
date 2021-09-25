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
          <b>Affirming Access</b> provides safe and affirming restroom access for transgender, intersex, and gender nonconforming individuals.
        </p>     

        <p className='question'>
          Why is this important?
        </p>

        <p className='answer'>
          According to respondents of the <a href={"https://www.ustranssurvey.org/"}>US Transgender Survey</a>:
          <ul>
            <li><b>59%</b> avoided using a restroom for fear of confrontation</li>
            <li><b>31%</b> avoided eating/drinking to avoid restrooms</li>
            <li><b>24%</b> had their presence in the restroom questioned</li>
            <li><b>12%</b> were harassed, attacked, or sexually assaulted in a restroom</li>
            <li><b>9%</b> were denied restroom access</li>
            <li><b>8%</b> developed a kidney issue or UTI from avoiding restrooms</li>
          </ul>
        </p>  

        <p className='question'>
          Where did you get this data?
        </p>

        <p className='answer'>
          All of this data is pulled from the <a href={"https://www.refugerestrooms.org/"}>Refuge Restrooms</a> database, which is kept updated by volunteers. If you know of a safe or gender-neutral restroom, please add it to their database. Approved submissions will also be reflected on <b>Affirming Access</b>.
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