import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* Children */
import NavBar from './NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
