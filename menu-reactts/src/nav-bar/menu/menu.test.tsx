import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Menu, TProps } from './menu';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<TProps, {}, Menu>;
beforeEach(() => {
  props = {
    menus: [
      'File',
      'About'
    ]
  };
  wrapper = enzyme.shallow(<Menu {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('Menu', () => {
  it('should render', () => {
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('should render each menu', () => {
    expect(wrapper.find('li').length).toEqual(2);
    expect(wrapper.find('li').at(0).text()).toEqual(props.menus[0]);
    expect(wrapper.find('li').at(1).text()).toEqual(props.menus[1]);
  });
});
