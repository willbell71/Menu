import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { MenuOptions, TProps } from './menu-options';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async() => {
  props = {
    options: [{
      title: 'New',
      command: jest.fn()
    }, {
      title: 'Open',
      command: jest.fn()
    }, {
      title: 'Exit',
      command: jest.fn()
    }],
    closeMenu: jest.fn()
  };

  await act(async () => {
    renderer = create(
      <MenuOptions { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.clearAllMocks());

describe('MenuOptions', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });
});
