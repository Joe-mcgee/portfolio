import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Blog.css';
import {Route, Link, Switch, withRouter, matchPath} from 'react-router-dom';


class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {

    return (
      <div className='Blog'>
      <p>this is the blog</p>
      </div>)
  }
}

Blog.propTypes = {

}

export default Blog