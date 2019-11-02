
import { TMenuOption } from './tmenuoption';

/**
 * Menu.
 * @property {string} title - menu title.
 * @property {TMenuOption[]} options - menu options.
 */
export type TMenu = {
  title: string;
  options: TMenuOption[];
};
