import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Blog.css';
import {Route, Link, Switch, withRouter, matchPath} from 'react-router-dom';

import BlogList from './BlogList/BlogList';
import Entry from './Entry/Entry';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render () {

    return (
      <div className='Blog'>
      <div className='Blog-title'>
      <h2>Recent</h2>
      </div>
      <div className='Blog-recent'>
        <BlogList />
      </div>
      </div>)
  }
}

Blog.propTypes = {

}

export default Blog