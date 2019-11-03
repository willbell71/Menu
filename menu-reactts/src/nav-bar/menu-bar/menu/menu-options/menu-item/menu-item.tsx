import * as React from 'react';

import { TMenuOption } from '../../../tmenuoption';

import './styles.scss';
import { thisExpression } from '@babel/types';

/**
 * Component props.
 * @property {TMenuOption} option - option that this item represents.
 * @property {() => void} closeMenu - close menu.
 */
export type TProps = {
  option: TMenuOption;
  closeMenu: () => void;
};

/**
 * Menu Item component.
 */
export class MenuItem extends React.Component<TProps> {
  /**
   * Select menu item.
   */
  public select: () => void = (): void => {
    // execute menu command function
    this.props.option.command();

    // close menu
    this.props.closeMenu();
  };

  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    return (
      <li
        key={ this.props.option.title }
      >
        <button
          className="menu-item"
          onClick={ this.select }
        >
          { this.props.option.title }
        </button>
      </li>
    );
  }
}
