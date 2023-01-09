import menuReducers, { menuActions, menuSelectors } from "./menu";
import { combineReducers } from "redux";

export const actions = {
  menu: menuActions,
};

export const selectors = {
  menu: menuSelectors,
};

const reducers = combineReducers({
  menu: menuReducers,
});
export default reducers;
