import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      restrooms: [],
      errorKey: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Affirming Access</header>
      </div>
    );
  }
}

export default App;