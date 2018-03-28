import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';



class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='Home'>
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