import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BlogList.css';

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }




  pullContent = async () => {
    const json = await fetch('https://thulsmans2994.wordpress.com/');
    const response = await JSON.parse(json);
    console.log(response)
    return response
  }

  componentDidMount = () => {
    this.pullContent();
  }

  render () {

    return (<div className='BlogList'>
      </div>)
  }
}

BlogList.propTypes = {

}

export default BlogList