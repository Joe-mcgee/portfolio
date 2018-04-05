import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='Nav'>
      </div>
      )
  };
}


Nav.propTypes = {

}

export default Nav

/*      <nav className='Nav'>
        <ul className='Nav__container'>
          <li><NavLink to='/' exact className='Nav__home'>Home</NavLink></li>
          <li><NavLink to='/blog' className='Nav__blog'>Blog</NavLink></li>
          <li><NavLink to='/portfolio' className='Nav__Portfolio'>Portfolio</NavLink></li>
        </ul>
      </nav>*/