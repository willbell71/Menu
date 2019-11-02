import * as React from 'react';

import { MenuOptions } from './menu-options/menu-options';
import { TMenu } from '../tmenu';

import './styles.scss';

/**
 * Component props.
 * @property {TMenu} menu - menu definition.
 * @property {boolean} open - is menu open.
 * @property {(menu: string) => void} toggle - callback to toggle menu.
 */
export type TProps = {
  menu: TMenu;
  open: boolean;
  toggle: (menu: string) => void;
};

/**
 * Menu component.
 */
export class Menu extends React.Component<TProps> {
  /**
   * Toggle menu state.
   */
  public toggle: () => void = (): void => {
    this.props.toggle(this.props.menu.title);
  };

  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    return (
      <li
        className="menu"
        key={ this.props.menu.title }
      >
        <button
          className="menu__button"
          onClick={ this.toggle }
          >
          { this.props.menu.title }
          {this.props.open && <MenuOptions
            options={ this.props.menu.options }
          />}
        </button>
      </li>
    );
  }
}
