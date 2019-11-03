/**
 * Menu option.
 * @property {string} title - menu option title.
 * @property {() => void} command - function to execute when menu item selected.
 */
export type TMenuOption = {
  title: string;
  command: () => void;
};
