import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, NavLink } from 'react-router-dom';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='Portfolio'>
        <div className='Portfolio-Title'>
          <h4>Projects</h4>
        </div>
        <div className='Portfolio-Body'>
        <p>Recent Projects</p>
        </div>

      </div>
      )
  }
}

Portfolio.propTypes = {

}

export default Portfolio