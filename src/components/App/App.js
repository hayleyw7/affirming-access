import React, { Component } from 'react';
import './App.css';
import Restrooms from '../Restrooms/Restrooms';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
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

  fetchAllRestrooms = (type, lat, long) => {
    const url = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${long}`

    this.setState({ restrooms: [] })

    const responseAction = response => response.json()
    const catchAction = error => this.setState({errorKey: error})

    if (type === 'all') {

      fetch(url)
        .then(responseAction)
        .then(data => {this.setState({restrooms: data})})
        .catch(catchAction)
      
    } else if (type === 'genderFree') {
      
      fetch(url)
        .then(responseAction)
        .then(data => {
          this.setState({restrooms: data.filter(element => element.unisex === true)})
        })
        .catch(catchAction)
    }
  }

  changeLayout = (e) => {
    document.querySelector(".restrooms-page").classList.remove("hidden");
    document.querySelector(".footer-bar").classList.add("hidden");
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path='/' 
          render={() => 
            <div>

              <div className='search-page'>     
                <Search fetchAllRestrooms={this.fetchAllRestrooms} fetchGenderFreeRestrooms={this.fetchGenderFreeRestrooms} changeLayout={this.changeLayout}/>    
              </div>      

              <div className='restrooms-page hidden'>
                {!this.state.restrooms.length ? <Loader /> :
                  <Restrooms restrooms={this.state.restrooms} />
                }
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
