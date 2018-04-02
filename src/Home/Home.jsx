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
        <img className='Portrait' src={require('./picture.jpg')} />
        <div className='About' >
          <p>I'm a Web Developer based from Calgary, Ab.</p>
        </div>
      </div>
      )
  }
}

Home.propTypes = {

}
export default Home