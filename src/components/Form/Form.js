import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      lat: '',
      long: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  } 

  searchRestrooms = event => {
    event.preventDefault();
    this.props.fetchRestrooms();
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
            placeholder='Latitude'
            name='lat'
            value={this.state.lat}
            onChange={event => this.handleChange(event)}
          />

          <input
            type='text'
            placeholder='Longitude'
            name='long'
            value={this.state.long}
            onChange={event => this.handleChange(event)}
          />          

          <button
            className='show-list-btn'
            onClick={event => this.searchRestrooms(event)}
          >Show List</button>
        </form>
      </article>
    )
  }  
}

export default Form;