import React, { Component } from 'react';
import './App.css';
import Restrooms from '../Restrooms/Restrooms';
import Form from '../Form/Form';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      restrooms: [],
      errorKey: ''
    }
  };

  fetchRestrooms = (lat, long) => {
    const url = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=${lat}&lng=${long}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({restrooms: data})
      })
      .catch(error => this.setState({errorKey: error})
    )
  }

  render() {
    return (
      <div className="App">
        <div className='home-page'>
          <h1 className='app-title'>Affirming Access</h1>        
          <Form fetchRestrooms={this.fetchRestrooms} />    
        </div>      

        <div className='restrooms-container'>
          <Restrooms restrooms={this.state.restrooms}  />    
        </div>
      </div>
    );
  }
}

export default App;
