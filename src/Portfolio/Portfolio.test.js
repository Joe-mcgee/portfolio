import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import './Portfolio.css';
import {BrowserRouter, NavLink} from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
    <Portfolio />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})