import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

NavBar.propTypes = {

}


export default NavBar;