import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { MenuItem, TProps } from './menu-item';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    option: {
      title: 'New',
      command: jest.fn()
    },
    closeMenu: jest.fn()
  };

  await act(async () => {
    renderer = create(
      <MenuItem { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.clearAllMocks());

describe('MenuItem', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render button title', async () => {
    const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'button' });

    expect(button.props.children).toEqual(props.option.title);
  });

  it('should call select for clicking the button', async () => {
    const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'button' });

    await act(async () => button.props.onClick());

    expect(props.closeMenu).toHaveBeenCalledTimes(1);
    expect(props.option.command).toHaveBeenCalledTimes(1);
  });
});
