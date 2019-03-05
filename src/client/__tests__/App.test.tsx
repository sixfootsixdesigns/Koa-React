import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { App } from '../App';

afterEach(() => {
  cleanup();
});

describe('App', () => {
  it('Renders page]', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
