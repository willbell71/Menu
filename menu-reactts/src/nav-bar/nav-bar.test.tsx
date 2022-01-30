import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { NavBar, TProps } from './nav-bar';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    menus: [{
      title: 'File',
      options: []
    }]
  };

  await act(async () => {
    renderer = create(
      <NavBar {...props} />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.clearAllMocks());

describe('NavBar', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render menus', async () => {
    const menus: ReactTestInstance = instance.findByProps({ 'data-testid': 'menus' });

    expect(menus.props.menus).toEqual(props.menus);
  });
});
