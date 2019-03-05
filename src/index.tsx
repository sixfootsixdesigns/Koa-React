import React from 'react';
import { render } from 'react-dom';
import { App } from './client/App';
import { Router } from '@reach/router';

render(
  <Router>
    <App path="/" default={true} />
  </Router>,
  document.getElementById('root')
);
