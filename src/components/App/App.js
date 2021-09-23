import React, { Component } from 'react';
import './App.css';
import Restrooms from '../Restrooms/Restrooms';
import Search from '../Search/Search';
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import FAQ from '../FAQ/FAQ';
import { Route } from "react-router";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      restrooms: [],
      errorKey: ''
    }
  };

  fetchAllRestrooms = (lat, long) => {
    const url = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${long}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({restrooms: data})
      })
      .catch(error => this.setState({errorKey: error})
    )
  }

  fetchGenderFreeRestrooms = (lat, long) => {
    this.fetchAllRestrooms(lat, long);

    const allRestrooms = this.state.restrooms;

    const result = allRestrooms.filter(element => {
      return element.unisex === true
    });

    this.setState({restrooms: result})
  }

  hideSearchPage = (e) => {
    const searchPage = document.querySelector(".search-page");
    searchPage.classList.add("hidden");
  }

  showRestroomsPage = (e) => {
    const restroomsPage = document.querySelector(".restrooms-page");
    restroomsPage.classList.remove("hidden");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' 
          render={() => 
            <div>
              <div className='search-page'>     
                <Search fetchAllRestrooms={this.fetchAllRestrooms} fetchGenderFreeRestrooms={this.fetchGenderFreeRestrooms} hideSearchPage={this.hideSearchPage} showRestroomsPage={this.showRestroomsPage}/>    
              </div>      

              <div className='restrooms-page hidden'>
                <Restrooms restrooms={this.state.restrooms} />
              </div>
            </div>  
          }
        /> 

        <Route exact path='/faq' 
          render={() => 
            <div className='faq-page'>
              <FAQ />
            </div>
          }
        />
      </div>
    );
  }
}

export default App;
