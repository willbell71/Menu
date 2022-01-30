import React, { FC } from 'react';

import { MenuItem } from './menu-item/menu-item';
import { TMenuOption } from '../../tmenuoption';

import './styles.scss';

/**
 * Component props.
 * @property {TMenuOption[]} options - options available in menu.
 * @property {() => void} closeMenu - close menu.
 */
export type TProps = {
  options: TMenuOption[];
  closeMenu: () => void;
};

/**
 * Menu Options component.
 */
export const MenuOptions: FC<TProps> = ({ options, closeMenu }: TProps ): JSX.Element => (
  <ul className="menu-options">
    {options.map((option: TMenuOption): JSX.Element => (
      <MenuItem
        key={ option.title }
        option={ option }
        closeMenu={ closeMenu }
      />
    ))}
  </ul>
);
