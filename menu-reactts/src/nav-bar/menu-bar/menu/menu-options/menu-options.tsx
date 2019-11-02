import * as React from 'react';

import { TMenuOption } from '../../tmenuoption';

import './styles.scss';

/**
 * Component props.
 */
export type TProps = {
  options: TMenuOption[];
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
          <li
            key={ option.title }
          >
            <button
              className="menu-options__option-button"
            >
              { option.title }
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
