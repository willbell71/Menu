import * as React from 'react';

import { Menu } from './menu/menu';

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
    return (
      <nav className="nav-bar">
        <p>Logo</p>
        <Menu
          menus={ ['File', 'Edit', 'View', 'Help'] }
        />
      </nav>        
    );
  }
}
