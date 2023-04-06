import { reducerWithInitialState } from "typescript-fsa-reducers";
import actions from "./action-types";
import { State } from "./types";

const initialState: State = {
  isOpenIntroduction: false,
};

const reducers = reducerWithInitialState(initialState).case(
  actions.setIsOpenIntroduction,
  (state, isOpenIntroduction) => ({
    ...state,
    isOpenIntroduction,
  })
);

export default reducers;
