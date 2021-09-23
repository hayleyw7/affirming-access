import React, { Component } from 'react';
import './App.css';
import Restrooms from '../Restrooms/Restrooms';
import Search from '../Search/Search';

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

  hideSearchPage = (e) => {
    const searchPage = document.querySelector(".search-page");
    searchPage.classList.add("hidden");
  }

  render() {
    return (
      <div className="App">
        <div className='search-page'>     
          <Search fetchRestrooms={this.fetchRestrooms} hideSearchPage={this.hideSearchPage}/>    
        </div>      

        <div className='restrooms-page'>
            <Restrooms restrooms={this.state.restrooms}  />    
        </div>
      </div>
    );
  }
}

export default App;
