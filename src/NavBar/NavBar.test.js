import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import './NavBar.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('NavBar', () => {
  it('Should be defined', () => {
    expect(NavBar).toBeDefined();

  });

  xit('should have a Homebutton', () => {

  })




});