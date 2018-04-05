import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Handler.css';
import {Route, Link, Switch, withRouter, matchPath} from 'react-router-dom';

/* Children */
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Portfolio from '../Portfolio/Portfolio';

class Handler extends Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className='Handler' style={{width: this.props.width, height:this.props.height}} >
        <div className='Main'>
          <Home />
        </div>
        <div className='Aside'>
          <Blog />
        </div>
        <div className='Touch'>
          <Portfolio />
        </div>
        <div className='Top'>
          <div className='Connect'>
            <p>Reach me at</p>
          </div>
        </div>
        <div className='Eye'>
        </div>
      </div>
      )
  }
}

Handler.propTypes = {

}

export default Handler