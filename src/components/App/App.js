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

        <Route exact path='/' 
          render={() => 
            <div className='restrooms-page'>
              <h2>Recommended Restrooms Near You</h2>
              <div className='restrooms-container'>
                <Restrooms restrooms={this.state.restrooms}  />    
              </div>
            </div>
        }
        />
      </div>
    );
  }
}

export default App;
