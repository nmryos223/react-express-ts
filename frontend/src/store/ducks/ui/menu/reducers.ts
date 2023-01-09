import { reducerWithInitialState } from "typescript-fsa-reducers";
import actions from "./action-types";
import { State } from "./types";

const initialState: State = {
  isMenu: false,
};

const reducers = reducerWithInitialState(initialState).case(
  actions.setIsMenu,
  (state, isMenu) => ({
    ...state,
    isMenu,
  })
);

export default reducers;
