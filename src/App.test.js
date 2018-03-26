import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('App', () => {
  it('Should be defined', () => {
    expect(App).toBeDefined();

  });
});


