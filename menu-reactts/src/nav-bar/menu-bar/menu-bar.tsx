import React from 'react';

import { Menu } from './menu/menu';
import { TMenu } from './tmenu';

import './styles.scss';

/**
 * Component props.
 * @property {TMenu[]} menus - list of menus.
 */
export type TProps = {
  menus: TMenu[];
};

/**
 * Component state.
 * @property {string} openMenu - name of menu currently open.
 */
export type TState = {
  openMenu: string;
}

/**
 * Menu Bar component.
 */
export class MenuBar extends React.Component<TProps, TState> {
  // @member {TState} state - component state.
  public state: TState = {
    openMenu: ''
  };

  /**
   * Toggle open menu.
   * @param {string} menu - name of menu to open, or close if already open.
   */
  public toggle: (menu: string) => void = (menu: string): void => {
    this.setState((state: TState): {openMenu: string} => ({
      openMenu: menu === state.openMenu ? '' : menu
    }));
  };

  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    return (
      <ul>
        {this.props.menus.map((menu: TMenu): JSX.Element => (
          <Menu
            key={ menu.title }
            menu={ menu }
            open={ menu.title === this.state.openMenu }
            toggle={ this.toggle }
            data-testid="menu"
          />
        ))}
      </ul>
    );
  }
}
