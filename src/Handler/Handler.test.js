import React from 'react';
import ReactDOM from 'react-dom';
import Handler from './Handler';
import './Handler.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Handler />, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('Handler', () => {
  it('Should be defined', () => {
    expect(Handler).toBeDefined();

  });
});