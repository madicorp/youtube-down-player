/**
 * Test to check if the component renders correctly
 */
/* global it expect jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LoginView from '@containers/auth/Login/LoginView';

// Login prop expects a promise
const mockPromise = new Promise(resolve => resolve());

it('LoginView renders correctly', () => {
  const tree = renderer.create(
    <LoginView login={() => mockPromise} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
