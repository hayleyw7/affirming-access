import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor( props ) {
    super();
    this.state = {
      lat: '',
      // 39.7331
      long: ''
      // -104.9524
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  } 

  handleClick = event => {
    event.preventDefault();
    // console.log(this.state.lat)
    this.props.fetchRestrooms(this.state.lat, this.state.long);
    // this.clearInputs();    
  }    

  // clearInputs = () => {
  //   this.setState({ lat: '', long: '' });
  // }       

  render() {
    return (
      <article>
        <form>
          <input
            type='text'
            placeholder='Latitude'
            name='lat'
            // value={this.state.lat}
            onChange={event => this.handleChange(event)}
          />

          <input
            type='text'
            placeholder='Longitude'
            name='long'
            // value={this.state.long}
            onChange={event => this.handleChange(event)}
          />          

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