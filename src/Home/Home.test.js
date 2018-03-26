import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './Home.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('Home', () => {
  it('Should be defined', () => {
    expect(Home).toBeDefined();

  });

  xit('Should render a title', () => {

  });

  xit('Should render picture', () => {

  });

  xit('Should render a tagline', () => {

  })

  });
