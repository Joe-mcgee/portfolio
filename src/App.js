
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

import Handler from './Handler/Handler'

const math = require('mathjs');

class App extends Component {

  constructor() {
    super();
    this.state = {
      width: 960,
      height: 593
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

/*
 https://www.hawatel.com/blog/handle-window-resize-in-react/
  */
  updateDimensions() {
    //insure a golden rectangle is composed at every browser width
    const width = window.innerWidth;
    let height = (1/math.phi) * width;
    this.setState({
      width: width,
      height: height
    })

  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }


  render() {
    return (
      <div className="App">
        <Handler width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}

App.propTypes = {

}

export default App;



/*
      <BrowserRouter>
        <div>
          <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/portfolio' component={Portfolio} />
            </Switch>
        </div>
      </BrowserRouter>
*/