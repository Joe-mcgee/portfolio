import React, { Component } from 'react';

/*childrem*/

import Home from './Home/Home'

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