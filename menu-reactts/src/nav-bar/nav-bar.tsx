import * as React from 'react';

import { MenuBar } from './menu-bar/menu-bar';
import { TMenu } from './menu-bar/tmenu';

import './styles.scss';

/**
 * Component props.
 * @property {TMenu[]} menus - menu defintions.
 */
export type TProps = {
  menus: TMenu[];
};

/**
 * Nav bar component.
 */
export class NavBar extends React.Component<TProps> {
  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {

    return (
      <nav className="nav-bar">
        <p>Logo</p>
        <MenuBar
          menus={ this.props.menus }
        />
      </nav>        
    );
  }
}
