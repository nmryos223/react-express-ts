import menuReducers, { childActions, childSelectors } from "./child";
import { combineReducers } from "redux";

export const actions = {
  child: childActions,
};

export const selectors = {
  child: childSelectors,
};

const reducers = combineReducers({
  child: menuReducers,
});
export default reducers;
