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
  } 

  fetchZip = (zip) => {
    const url = `https://api.zippopotam.us/us/${zip}`

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.places
      })
      .catch(error => this.setState({errorKey: error})
    )
  }

  handleClick = async (event) => {
    // console.log(this.state.isGenderFreeChecked) 
    event.preventDefault();
    this.props.hideSearchPage();
    this.props.showRestroomsPage();
    let places = await this.fetchZip(this.state.zip)

    const checkbox = document.querySelector(".checkbox");

    if (checkbox.checked === false) {
      console.log('no checked false')
      this.props.fetchAllRestrooms(places[0].latitude, places[0].longitude);
    // this.clearInputs();    
    } else {
      console.log('yes checked true')
      this.props.fetchGenderFreeRestrooms(places[0].latitude, places[0].longitude);
    }
  }    

  // clearInputs = () => {
  //   this.setState({ lat: '', long: '' });
  // }   

  setGender = () => {
    this.setState({ isGenderFree: true });
  }

  genderFreeChecked = () => {
    this.setGender()
    // console.log(this.state.isGenderFreeChecked) 
  }    

  render() {
    return (
      <div>    
        <h3 className='find-safe'>Find Safe Restrooms Near You</h3>
        
        <form>

          <input
            type='text'
            placeholder='Enter Zip Code'
            name='zip'
            // value={this.state.lat}
            onChange={event => this.handleChange(event)}
          />    

          <article className='checkbox-container'>
            <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="true"
                className='checkbox'
                // onClick={event => this.genderFreeChecked(event)}
              >
            </input>
            <label htmlFor="checkbox" className='checkbox'>Gender Neutral Only?</label>           
          </article>

          <button
            className='show-list-btn'
            onClick={event => this.handleClick(event)}
          >Show List</button>

        </form>
           
        <Footer />
      </div>
    )
  }  
}

export default Search;