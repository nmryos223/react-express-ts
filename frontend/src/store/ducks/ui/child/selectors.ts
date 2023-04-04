import { State } from "./types";

type Child = {
  ui: {
    child: State;
  };
};

const isOpenMenu = (state: Child) => state.ui.child.isOpenMenu;

const selectors = {
  isOpenMenu,
};

export default selectors;
