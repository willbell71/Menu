import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { MenuBar, TProps, TState } from './menu-bar';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    menus: [{
      title: 'File',
      options: []
    }, {
      title: 'About',
      options: []
    }]
  };

  await act(async () => {
    renderer = create(
      <MenuBar {...props} />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.clearAllMocks());

describe('Menu', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should change open menu when calling toggle', async () => {
    const menus: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'menu' });

    expect(menus[0].props.open).toBeFalsy();

    await act(async () => menus[0].props.toggle('File'));

    expect(menus[0].props.open).toBeTruthy();
  });

  it('should close open menu when calling toggle twice', async () => {
    const menus: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'menu' });

    expect(menus[0].props.open).toBeFalsy();

    await act(async () => menus[0].props.toggle('File'));
    expect(menus[0].props.open).toBeTruthy();

    await act(async () => menus[0].props.toggle('File'));
    expect(menus[0].props.open).toBeFalsy();
  });
});
