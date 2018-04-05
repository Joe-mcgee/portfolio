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
      locations: ['Main', 'Aside', 'Touch'],
      focus: 0,
      sections: [Home, Blog, Portfolio]
    }

  }

  transform = () => {
    let newFocus = this.state.focus + 1;
    this.setState({focus: newFocus})
}




  renderBody = () => {
      const seed = [];
      for (let i = 0; i < this.state.locations.length; i ++) {
        const match = {}
        const location = this.state.locations[i];
        const section = this.state.sections[(i + this.state.focus) % this.state.sections.length];
        match[location] = section;
        seed.push(match)
      }
      console.log(seed)

      let divList = seed.map((match) => {
        const Block = Object.values(match)[0]
      return (<div className={Object.keys(match)[0]}>
                <Block />
              </div>)
    })
    return divList
  }

  render () {
    const Body = this.renderBody();

    return (
      <div className='Handler' style={{width: this.props.width, height:this.props.height}} >
        {Body}
         <div className='Top'>
          <div className='Connect'>
            <p>Reach me at</p>
          </div>
        </div>
        <div className='Eye'>
            <Nav transform={this.transform} />
        </div>
      </div>
      )
  }
}

Handler.propTypes = {

}

export default Handler


/*       <div className='Main'>
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
            <Nav transform={this.transform} />
        </div>*/