import React, { Component } from 'react';
import './Search.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor( props ) {
    super();
    this.state = {
      zip: '',
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
    event.preventDefault();
    this.props.hideSearchPage();
    this.props.showRestroomsPage();
    let places = await this.fetchZip(this.state.zip)
    console.log(places)
    this.props.fetchRestrooms(places[0].latitude, places[0].longitude);
    this.clearInputs();    
  }    

  clearInputs = () => {
    this.setState({ lat: '', long: '' });
  }       

  render() {
    return (
      <div>    
        <Header />
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
            <input type="checkbox" id="checkbox" name="checkbox" value="true" className='checkbox'></input>
            <label htmlFor="checkbox" className='checkbox'>Gender Neutral Only?</label>           
          </article>

          <button
            className='show-list-btn'
            onClick={event => this.handleClick(event)}
          >Show List</button>

        </form>

        <h4 className='euphoria'>You deserve gender euphoria.</h4>

          <Link
            to={'/faq'}
            key='1'  
          >

            <button
              className='faq-btn'
            >FAQ</button>

          </Link>            

      </div>
    )
  }  
}

export default Search;