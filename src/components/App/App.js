import React, { Component } from 'react';
import './App.css';
import Restrooms from '../Restrooms/Restrooms';
import Search from '../Search/Search';
import { Route } from "react-router";

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

  handleClick = async (zip) => {
    let places = await this.fetchZip(zip);
    this.fetchRestrooms(places[0].latitude, places[0].longitude);
    // this.clearInputs();
  }

  // clearInputs = () => {
  //   this.setState({ lat: '', long: '' });
  // }   

  
  render = () => {
    return (
      <div className="App">
        <Route exact path='/' 
          render={() => 
            <div className='home-page'>
              <h1 className='app-title'>Affirming Access</h1>        
              <Search fetchRestrooms={this.fetchRestrooms} />    
            </div>  
          }
        />    

        <Route exact path={'/:zip'} 
          render={({ match }) =>
            <div>
              {this.handleClick(parseInt(match.params.zip))}
              <Restrooms restrooms={this.state.restrooms} />
            </div>
          }
        />
      </div>
    );
  }
}

export default App;
