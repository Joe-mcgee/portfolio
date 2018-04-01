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
    this.state = {

    }
  }

  render () {

    return (
      <div className='Handler'>
      <p>this is the Handler</p>
      </div>
      )
  }
}

Handler.propTypes = {

}

export default Handler