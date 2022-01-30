import React, { FC, useMemo } from 'react';
import reactDOM from 'react-dom';

import { NavBar } from './nav-bar/nav-bar';
import { TMenu } from './nav-bar/menu-bar/tmenu';

import './styles.scss';

/**
 * App component.
 */
const App: FC = (): JSX.Element => {
  // menus
  const menus: TMenu[] = useMemo(() => ([{
    title: 'File',
    options: [{
      title: 'New',
      command: (): void => {}
    }, {
      title: 'Open',
      command: (): void => {}
    }, {
      title: 'Exit',
      command: (): void => {}
    }]
  }, {
    title: 'Edit',
    options: [{
      title: 'Cut',
      command: (): void => {}
    }, {
      title: 'Copy',
      command: (): void => {}
    }, {
      title: 'Paste',
      command: (): void => {}
    }]
  }, {
    title: 'View',
    options: []
  }, {
    title: 'Help',
    options: [{
      title: 'About',
      command: (): void => { console.log('User selected About'); }
    }]
  }]), []);

  return (
    <header>
      <NavBar
        menus={ menus }
      />
    </header>
  );
};

reactDOM.render(<App/>, document.getElementById('app'));
