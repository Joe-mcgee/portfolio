import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*childrem*/

import Home from './Home'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className='NavBar'>
        <nav>
          <Home />
        </nav>
      </div>
      );
  }
}

export default NavBar;