import * as React from 'react';

import './styles.scss';

/**
 * Component props.
 * @property {string[]} menus - list of menus.
 */
export type TProps = {
  menus: string[];
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
        {this.props.menus.map((menu: string): JSX.Element => (
          <li
            className="menu-item"
            key={ menu }
          >{ menu }</li>
        ))}
      </ul>
    );
  }
}
