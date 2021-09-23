import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
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
      <article>
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
            <label for="checkbox" className='checkbox'>Gender Neutral Only?</label>           
          </article>
          <button
            className='show-list-btn'
            onClick={event => this.handleClick(event)}
          >Show List</button>
        </form>
      </article>
    )
  }  
}

export default Form;