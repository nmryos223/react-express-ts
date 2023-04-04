import { reducerWithInitialState } from "typescript-fsa-reducers";
import actions from "./action-types";
import { State } from "./types";

const initialState: State = {
  isOpenMenu: false,
};

const reducers = reducerWithInitialState(initialState).case(
  actions.setIsOpenMenu,
  (state, isOpenMenu) => ({
    ...state,
    isOpenMenu,
  })
);

export default reducers;
