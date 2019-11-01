import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { NavBar } from './nav-bar';

enzyme.configure({ adapter: new Adapter() });

let wrapper: enzyme.ShallowWrapper<{}, {}, NavBar>;
beforeEach(() => {
  wrapper = enzyme.shallow(<NavBar/>);
});
afterEach(() => jest.restoreAllMocks());

describe('NavBar', () => {
  it('should render', () => {
    expect(wrapper.find('nav').length).toEqual(1);
  });
});
