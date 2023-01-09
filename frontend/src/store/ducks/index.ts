import { combineReducers } from "redux";
import uiReducers, {
  actions as uiActions,
  selectors as uiSelectors,
} from "./ui";

export const actions = {
  ui: uiActions,
};

export const selectors = {
  ui: uiSelectors,
};

const reducers = combineReducers({
  ui: uiReducers,
});

export default reducers;
