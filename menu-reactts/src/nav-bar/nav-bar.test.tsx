import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { NavBar, TProps } from './nav-bar';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, NavBar>;
beforeEach(() => {
  props = {
    menus: [{
      title: 'File',
      options: []
    }]
  };
  wrapper = enzyme.shallow(<NavBar {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('NavBar', () => {
  it('should render', () => {
    expect(wrapper.find('nav').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('MenuBar').length).toEqual(1);
    expect(wrapper.find('MenuBar').prop('menus')).toEqual(props.menus);
  });
});
