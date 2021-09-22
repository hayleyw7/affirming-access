import React, { Component } from 'react';
import './App.css';
import Restrooms from '../Restrooms/Restrooms';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      restrooms: [
        // {
        //   "id": 39596,
        //   "name": "Sienna Wine Bar & Small Plates ",
        //   "street": "3422 E 12th Ave ",
        //   "city": "Denver ",
        //   "state": "CO",
        //   "accessible": true,
        //   "unisex": true,
        //   "directions": "",
        //   "comment": "",
        //   "latitude": 39.7349146,
        //   "longitude": -104.9467043,
        //   "created_at": "2018-01-21T19:49:16.830Z",
        //   "updated_at": "2018-01-21T19:49:16.830Z",
        //   "downvote": 0,
        //   "upvote": 0,
        //   "country": "US",
        //   "changing_table": false,
        //   "edit_id": 39596,
        //   "approved": true,
        //   "distance": 0.3275790686734735,
        //   "bearing": "72.328577854195"
        // },
        // {
        //   "id": 23058,
        //   "name": "Berenices",
        //   "street": "3500 E 12th ave",
        //   "city": "denver",
        //   "state": "co",
        //   "accessible": false,
        //   "unisex": false,
        //   "directions": "",
        //   "comment": "",
        //   "latitude": 39.7349113,
        //   "longitude": -104.9460213,
        //   "created_at": "2016-06-15T01:24:28.544Z",
        //   "updated_at": "2016-06-15T01:24:28.544Z",
        //   "downvote": 0,
        //   "upvote": 0,
        //   "country": "US",
        //   "changing_table": false,
        //   "edit_id": 23058,
        //   "approved": true,
        //   "distance": 0.36129443220305396,
        //   "bearing": "74.147538209597"
        // },
        // {
        //   "id": 39597,
        //   "name": "TAG Burger ",
        //   "street": "1222 Madison St",
        //   "city": "Denver",
        //   "state": "CO",
        //   "accessible": true,
        //   "unisex": true,
        //   "directions": "",
        //   "comment": "",
        //   "latitude": 39.7355773,
        //   "longitude": -104.945803,
        //   "created_at": "2018-01-21T19:50:37.353Z",
        //   "updated_at": "2018-01-21T19:50:37.353Z",
        //   "downvote": 0,
        //   "upvote": 0,
        //   "country": "US",
        //   "changing_table": false,
        //   "edit_id": 39597,
        //   "approved": true,
        //   "distance": 0.3900830543694952,
        //   "bearing": "69.417880042619"
        // }
      ],
      errorKey: ''
    }
  }

  componentDidMount() {
    const url = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=100&offset=0&lat=39.7331&lng=-104.9524'
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({restrooms: data}))
      .catch(error => this.setState({errorKey: error})
    )
  }  

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Affirming Access</h1>
        <div className='restrooms-container'>
          <Restrooms restrooms={this.state.restrooms} />    
        </div>
      </div>
    );
  }
}

export default App;
