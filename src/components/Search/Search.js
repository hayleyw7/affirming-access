import React, { Component } from 'react';
import './Search.css';
import Footer from '../Footer/Footer';
// import { Link } from 'react-router-dom';

class Search extends Component {
  constructor( props ) {
    super();
    this.state = {
      zip: '',
      isGenderFreeChecked: false,
      errorKey: ''
    }
  }

  handleChange = event => {
    
    this.setState({ [event.target.name]: event.target.value });
    // this.setValue(event.target.value);
  } 

  fetchZip = (zip) => {
    const url = `https://api.zippopotam.us/us/${zip}`

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.places[0]
      })
      .catch(error => this.setState({errorKey: error})
    )
  }

  handleClick = async (event) => {
    event.preventDefault();

    let location = await this.fetchZip(this.state.zip)

    if (location === undefined) {

      const badZipError = document.querySelector(".bad-zip");
      badZipError.classList.remove("hidden");
    
    } else {      

      this.props.changeLayout();      

      const checkbox = document.querySelector(".checkbox");

      if (checkbox.checked === false) {
        this.props.fetchRestrooms('all', location.latitude, location.longitude);
  
      } else {
        this.props.fetchRestrooms('genderFree', location.latitude, location.longitude);
      }
    }

    this.setState({ zip: '' });
    
  }  

  showBadZipError() {
    return `<h3 className='bad-zip'>Please enter a valid zip code.</h3>`
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
                // onClick={event => this.genderFreeChecked(event)}
              >
            </input>
            <label htmlFor="checkbox" className='checkbox-label'>Gender Neutral Only?</label>           
          </article>

          <button
            className='show-list-btn'
            alt='Show List Button'
            onClick={event => this.handleClick(event)}
          >Search Now</button>

        </form>
           
        <Footer />
      </div>
    )
  }  
}

export default Search;