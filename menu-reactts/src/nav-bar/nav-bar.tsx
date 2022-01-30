import React, { FC } from 'react';

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
export const NavBar: FC<TProps> = ({ menus }: TProps): JSX.Element => (
  <nav className="nav-bar">
    <p>Logo</p>
    <MenuBar
      menus={ menus }
      data-testid="menus"
    />
  </nav>
);
