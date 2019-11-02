import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { MenuBar, TProps, TState } from './menu-bar';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<TProps, {}, MenuBar>;
beforeEach(() => {
  props = {
    menus: [{
      title: 'File',
      options: []
    }, {
      title: 'About',
      options: []
    }]
  };
  wrapper = enzyme.shallow(<MenuBar {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('Menu', () => {
  it('should render', () => {
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('Menu').length).toEqual(2);
  });

  it('should render first menu', () => {
    expect(wrapper.find('Menu').length).toEqual(2);
    expect(wrapper.find('Menu').at(0).prop('menu')).toEqual(props.menus[0]);
    expect(wrapper.find('Menu').at(0).prop('open')).toEqual(false);
    expect(wrapper.find('Menu').at(0).prop('toggle')).toEqual(wrapper.instance().toggle);
  });

  it('should render second menu', () => {
    expect(wrapper.find('Menu').length).toEqual(2);
    expect(wrapper.find('Menu').at(1).prop('menu')).toEqual(props.menus[1]);
    expect(wrapper.find('Menu').at(1).prop('open')).toEqual(false);
    expect(wrapper.find('Menu').at(1).prop('toggle')).toEqual(wrapper.instance().toggle);
  });

  it('should change open menu when calling toggle', () => {
    wrapper.instance().toggle('File');
    expect(wrapper.instance().state.openMenu).toEqual('File');

    wrapper.instance().toggle('About');
    expect(wrapper.instance().state.openMenu).toEqual('About');
  });

  it('should close open menu when calling toggle twice', () => {
    wrapper.instance().toggle('File');
    expect(wrapper.instance().state.openMenu).toEqual('File');

    wrapper.instance().toggle('File');
    expect(wrapper.instance().state.openMenu).toEqual('');
  });
});
