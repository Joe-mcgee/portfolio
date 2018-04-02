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
        <div className='Header'>
            <div className='hi'><p>Hi, I'm... </p></div>
          <div className='title'>
            <h1 className='name'>Taylor Hulsmans</h1>
          </div>
        </div>
        <img className='Portrait' src={require('./picture.jpg')} />
        <div className='About' >
          <div className= 'snippit'>
            <p>I'm a Web Developer based from Calgary, Ab.</p>
          </div>
        </div>
      </div>
      )
  }
}

Home.propTypes = {

}
export default Home