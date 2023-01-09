import { State } from "./types";

type Menu = {
  ui: {
    menu: State;
  };
};

const isMenu = (state: Menu) => state.ui.menu.isMenu;

const selectors = {
  isMenu,
};

export default selectors;
