import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Menu, TProps } from './menu';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<TProps, {}, Menu>;
beforeEach(() => {
  props = {
    menu: {
      title: 'File',
      options: []
    },
    open: false,
    toggle: jest.fn()
  };
  wrapper = enzyme.shallow(<Menu {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('Menu', () => {
  it('should render', () => {
    expect(wrapper.find('li').length).toEqual(1);
    expect(wrapper.find('li').at(0).text()).toContain(props.menu.title);
    expect(wrapper.find('MenuOptions').length).toEqual(0);
  });

  it('should render menu options when open', () => {
    wrapper.setProps({open: true});

    expect(wrapper.find('MenuOptions').length).toEqual(1);
    expect(wrapper.find('MenuOptions').prop('options')).toEqual(props.menu.options);
    expect(wrapper.find('MenuOptions').prop('closeMenu')).toEqual(wrapper.instance().toggle);
  });

  it('should invoke props toggle', () => {
    wrapper.instance().toggle();

    expect(props.toggle).toHaveBeenCalledTimes(1);
    expect(props.toggle).toHaveBeenCalledWith(props.menu.title);
  });
});
