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
      command: 'new'
    }, {
      title: 'Open',
      command: 'open'
    }, {
      title: 'Exit',
      command: 'exit'
    }]
  };
  wrapper = enzyme.shallow(<MenuOptions {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('MenuOptions', () => {
  it('should render', () => {
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(3);
  });

  it('should render each menu', () => {
    expect(wrapper.find('li').length).toEqual(3);
    expect(wrapper.find('li').at(0).text()).toEqual(props.options[0].title);
    expect(wrapper.find('li').at(1).text()).toEqual(props.options[1].title);
    expect(wrapper.find('li').at(2).text()).toEqual(props.options[2].title);
  });
});
