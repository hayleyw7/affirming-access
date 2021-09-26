import React, { Component } from 'react';
import './Search.css';
import Footer from '../Footer/Footer';
import { fetchZip, setError } from '../../utilities/apiCalls';

class Search extends Component {
  constructor( props ) {
    super();
    this.state = {
      zip: '',
      isGenderFreeChecked: false,
      errorKey: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  } 

  handleClick = async (event) => {
    event.preventDefault();

    let location = await fetchZip(this.state.zip).then(data => {
      return data.places[0]
    })

    if (location === undefined || this.state.zip === undefined) {

      const badZipError = document.querySelector(".bad-zip");
      badZipError.classList.remove("hidden");
    
    } else {

      this.props.displayRestrooms();      

      const checkbox = document.querySelector(".checkbox");

      if (checkbox.checked === false) {
        this.props.fetchRestrooms('all', location.latitude, location.longitude);
  
      } else {
        this.props.fetchRestrooms('genderFree', location.latitude, location.longitude);
      }
    }
    this.setState({ zip: '' });
  }  

  render() {
    return (
      <div>    
        <p className='find-safe'>Find Safe Restrooms Near You</p>
        
        <form>

          <input
            type='number'
            placeholder='Enter Zip Code'
            name='zip'
            alt='Enter Zip Code'
            className='zip-input'
            value={this.state.zip}
            onChange={event => this.handleChange(event)}
          />    

          <h3 className='bad-zip hidden'>Please enter a valid US zip code.</h3>

          <article className='checkbox-container'>
          
            <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="true"
                className='checkbox'
                alt='Gender Free Only'
              >
            </input>

            <label
              htmlFor="checkbox"
              className='checkbox-label'
            >
              Gender Neutral Only?
            </label>  

          </article>

          <button
            className='show-list-btn'
            alt='Show List Button'
            onClick={event => this.handleClick(event)}
          >
            Search Now
          </button>

        </form>
           
        <Footer />
      </div>
    )
  }  
}

export default Search;