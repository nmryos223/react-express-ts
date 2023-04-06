import { State } from "./types";

type Child = {
  ui: {
    child: State;
  };
};

const isOpenIntroduction = (state: Child) => state.ui.child.isOpenIntroduction;

const selectors = {
  isOpenIntroduction,
};

export default selectors;
