import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { MenuOptions, TProps } from './menu-options';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<TProps, {}, MenuOptions>;
beforeEach(() => {
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
  wrapper = enzyme.shallow(<MenuOptions {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('MenuOptions', () => {
  it('should render', () => {
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('MenuItem').length).toEqual(3);
  });

  it('should render each menu', () => {
    expect(wrapper.find('MenuItem').length).toEqual(3);
    expect(wrapper.find('MenuItem').at(0).prop('option')).toEqual(props.options[0]);
    expect(wrapper.find('MenuItem').at(0).prop('closeMenu')).toEqual(props.closeMenu);
    expect(wrapper.find('MenuItem').at(1).prop('option')).toEqual(props.options[1]);
    expect(wrapper.find('MenuItem').at(1).prop('closeMenu')).toEqual(props.closeMenu);
    expect(wrapper.find('MenuItem').at(2).prop('option')).toEqual(props.options[2]);
    expect(wrapper.find('MenuItem').at(2).prop('closeMenu')).toEqual(props.closeMenu);
  });
});
