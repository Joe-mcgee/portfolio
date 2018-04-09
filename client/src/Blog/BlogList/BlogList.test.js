import React from 'react';
import ReactDOM from 'react-dom';
import BlogList from './BlogList';
import './BlogList.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogList />, div);
  ReactDOM.unmountComponentAtNode(div);
})