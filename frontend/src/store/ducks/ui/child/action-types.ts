import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("ui/child");

const actions = {
  setIsOpenMenu: actionCreator<boolean>("SET_IS_OPEN_MENU"),
};

export default actions;
