import * as React from 'react';
import * as reactDOM from 'react-dom';

import { NavBar } from './nav-bar/nav-bar';
import { TMenu } from './nav-bar/menu-bar/tmenu';

import './styles.scss';

/**
 * App component.
 */
class App extends React.Component {
  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    // menus
    const menus: TMenu[] = [{
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
        command: (): void => {}
      }]
    }];

    return (
      <header>
        <NavBar
          menus={ menus }
        />
      </header>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));
