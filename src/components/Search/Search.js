import React, { Component } from 'react';
import './Search.css';
import Footer from '../Footer/Footer';
import { fetchLocation } from '../../utilities/apiCalls';

class Search extends Component {
  constructor( props ) {
    super();
    this.state = {
      zip: {},
      errorKey: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = async (event) => {
    event.preventDefault();

    let location = await fetchLocation(this.state.zip).catch(
      error => this.setState({errorKey: error})
    )

    if (location === undefined) {
      
      document.querySelector(".bad-zip").classList.remove("hidden");
      document.querySelector(".restrooms-page").classList.add("hidden");

    } else {

      this.props.showRestrooms();      

      const checkbox = document.querySelector(".checkbox");

      if (checkbox.checked === false) {
        this.props.getRestrooms('all', location.latitude, location.longitude);
  
      } else {
        this.props.getRestrooms('genderFree', location.latitude, location.longitude);
      }
    }

    this.setState({ zip: {} });
    document.querySelector(".checkbox").checked = false;
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