import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home';
import './Home.css';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('Home', () => {
  it('Should be defined', () => {
    expect(Home).toBeDefined();

  });

  it('Should render a title', () => {
    const title = renderer.create(<p>Taylor Hulsmans</p>).toJSON();
      expect(title).toMatchSnapshot();
  });

  it('Should render picture', () => {
    const picture = renderer.create(<img class='Portrait' />).toJSON();
    expect(picture).toMatchSnapshot();
  });

  it('Should render a tagline', () => {
    const tagline = renderer.create(<p class='snippit'></p>)
    expect(tagline).toMatchSnapshot();

  })

  });
