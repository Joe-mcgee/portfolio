import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

import Handler from './Handler/Handler'



class App extends Component {

  constructor() {
    super();
    this.state = {
      width: 960,
      height: 367
    }
  }

/*
 https://www.hawatel.com/blog/handle-window-resize-in-react/
  */
  updateDimensions() {

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