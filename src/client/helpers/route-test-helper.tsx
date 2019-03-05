import React from 'react';
import {
  LocationProvider,
  createHistory,
  createMemorySource
} from '@reach/router';
import { render } from 'react-testing-library';

export const routeTestHelper = (pathname: string, element: JSX.Element) => {
  const testHistory = createHistory(createMemorySource(pathname));
  const { container } = render(
    <LocationProvider history={testHistory}>{element}</LocationProvider>
  );
  return container;
};
