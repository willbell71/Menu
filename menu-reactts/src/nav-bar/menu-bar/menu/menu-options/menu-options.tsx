import * as React from 'react';

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
export class MenuOptions extends React.Component<TProps> {
  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    return (
      <ul className="menu-options">
        {this.props.options.map((option: TMenuOption): JSX.Element => (
          <MenuItem
            key={ option.title }
            option={ option }
            closeMenu={ this.props.closeMenu }
          />
        ))}
      </ul>
    );
  }
}
