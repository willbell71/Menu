import * as React from 'react';

import { Menu } from './menu/menu';
import { TMenu } from './menu/tmenu';

import './styles.scss';

/**
 * Nav bar component.
 */
export class NavBar extends React.Component {
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
        command: 'new'
      }, {
        title: 'Open',
        command: 'open'
      }, {
        title: 'Exit',
        command: 'exit'
      }]
    }, {
      title: 'Edit',
      options: [{
        title: 'Cut',
        command: 'cut'
      }, {
        title: 'Copy',
        command: 'copy'
      }, {
        title: 'Paste',
        command: 'paste'
      }]
    }, {
      title: 'View',
      options: []
    }, {
      title: 'Help',
      options: [{
        title: 'About',
        command: 'about'
      }]
    }];

    return (
      <nav className="nav-bar">
        <p>Logo</p>
        <Menu
          menus={ menus }
        />
      </nav>        
    );
  }
}
