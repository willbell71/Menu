import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { MenuItem, TProps } from './menu-item';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<TProps, {}, MenuItem>;
beforeEach(() => {
  props = {
    option: {
      title: 'New',
      command: jest.fn()
    },
    closeMenu: jest.fn()
  };
  wrapper = enzyme.shallow(<MenuItem {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('MenuItem', () => {
  it('should render', () => {
    expect(wrapper.find('li').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should render button title', () => {
    expect(wrapper.find('button').text()).toEqual(props.option.title);
  });

  it('should call select for clicking the button', () => {
    wrapper.find('button').simulate('click');

    expect(props.closeMenu).toHaveBeenCalledTimes(1);
    expect(props.option.command).toHaveBeenCalledTimes(1);
  });
});
