import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import './Nav.css';
import {BrowserRouter, NavLink} from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
    <Nav />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('NavLinks', () => {

  it('should have a home route', () => {
    const home = renderer.create(<BrowserRouter><NavLink to='/' exact className='Nav__home'>Home</NavLink></BrowserRouter>)
    expect(home).toMatchSnapshot()
  })

  it('should have a blog route', () => {
    const blog = renderer.create(<BrowserRouter><NavLink to='/blog' exact className='Nav__blog'>Blog</NavLink></BrowserRouter>)
  })

})