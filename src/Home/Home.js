import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import {Router, Link} from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='Home'>
      <Link to='/'>Home</Link>
      <p>Taylor Hulsmans</p>
      <img />
      <p> This is My site</p>
      </div>
      )
  }
}

Home.propTypes = {

}
export default Home