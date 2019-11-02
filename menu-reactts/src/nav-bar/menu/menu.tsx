import * as React from 'react';

import { MenuOptions } from './menu-options/menu-options';
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
 * Menu component.
 */
export class Menu extends React.Component<TProps> {
  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    return (
      <ul className="menu">
        {this.props.menus.map((menu: TMenu): JSX.Element => (
          <li
            className="menu-item"
            key={ menu.title }
          >{ menu.title }
            <MenuOptions
              options={ menu.options }
            />
          </li>
        ))}
      </ul>
    );
  }
}
