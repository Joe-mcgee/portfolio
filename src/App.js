import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';


/* Children */
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Blog from './Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/blog' component={Blog} />
            </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {

}

export default App;
