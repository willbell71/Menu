import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { Menu, TProps } from './menu';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    menu: {
      title: 'File',
      options: []
    },
    open: false,
    toggle: jest.fn()
  };

  await act(async () => {
    renderer = create(
      <Menu { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.clearAllMocks());

describe('Menu', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render menu options when open', async () => {
    props.open = true;

    await act(async () => renderer.update(
      <Menu {...props} />
    ));

    const email: ReactTestInstance = instance.findByProps({ 'data-testid': 'menu-options' });
    expect(email).toBeTruthy();
  });

  it('should invoke props toggle', async () => {
    props.open = true;

    await act(async () => renderer.update(
      <Menu {...props} />
    ));

    const menu: ReactTestInstance = instance.findByProps({ 'data-testid': 'menu-options' });
    await act(async () => menu.props.closeMenu());

    expect(props.toggle).toHaveBeenCalledTimes(1);
    expect(props.toggle).toHaveBeenCalledWith(props.menu.title);
  });
});
