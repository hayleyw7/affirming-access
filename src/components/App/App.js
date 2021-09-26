import React, { Component } from 'react';
import './App.css';
import Restrooms from '../Restrooms/Restrooms';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { getRestrooms } from '../../utilities/apiCalls';
// import Footer from '../Footer/Footer';
import FAQ from '../FAQ/FAQ';
import { Route } from "react-router";
import { cleanRestroomsData } from '../../utilities/dataCleaning';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      restrooms: [],
      errorKey: ''
    }
  };

  fetchRestrooms = (type, lat, long) => {

    this.setState({ restrooms: [] })

    const catchAction = error => this.setState({errorKey: error})

    if (type === 'all') {

      getRestrooms(lat, long)
        .then(data => cleanRestroomsData(data))
        .then(data => {this.setState({restrooms: data})})
        .catch(catchAction)
      
    } else if (type === 'genderFree') {
      
      getRestrooms(lat, long)
        .then(data => {
          this.setState({ 
            restrooms: data.filter(
              element => element.unisex === true
            )
          })
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
                <Search fetchRestrooms={this.fetchRestrooms} changeLayout={this.changeLayout}/>    
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
