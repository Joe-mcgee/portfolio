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
            <h1 className='name'>Taylor Hulsmans
            <p className='epiloge'>a Web Developer</p></h1>
          </div>
        </div>
        <img className='Portrait' src={require('./picture.jpg')} />
        <div className='About' >
            <p className='letter'>Pleased to resonate into your existence</p>
            <p className='business-call'>Are you in need of Web Development Resources</p>
          </div>
          <div className='interests'><p></p></div>
        </div>

      )
  }
}

Home.propTypes = {

}
export default Home