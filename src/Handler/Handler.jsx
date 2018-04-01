import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Handler.css';
import {Route, Link, Switch, withRouter, matchPath} from 'react-router-dom';


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
      </div>)
  }
}

Handler.propTypes = {

}

export default Handler