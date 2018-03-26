import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';
import './Blog.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blog />, div);
  ReactDOM.unmountComponentAtNode(div);
})