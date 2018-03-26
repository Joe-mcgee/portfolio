import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* Children */
import NavBar from './NavBar/NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

NavBar.propTypes = {

}

export default App;
