import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <nav className='Nav'>
        <ul className='Nav__container'>
          <li><NavLink to='/' exact className='Nav__home'>Home</NavLink></li>
          <li><NavLink to='/blog' className='Nav__blog'>Blog</NavLink></li>
          <li><NavLink to='/portfolio' className='Nav__Portfolio'>Portfolio</NavLink></li>
        </ul>
      </nav>
      )
  };
}


Nav.propTypes = {

}

export default Nav