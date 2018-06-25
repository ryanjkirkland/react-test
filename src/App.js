import React, { Component } from 'react';
import TDEE from './Components/TDEE';
import MHR from './Components/MHR';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fitness Stats Calculator</h1>
        <TDEE />
        <MHR />
      </div>
    );
  }
}

export default App;
