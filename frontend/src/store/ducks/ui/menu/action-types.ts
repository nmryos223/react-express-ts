import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("ui/menu");

const actions = {
  setIsMenu: actionCreator<boolean>("SET_IS_MENU"),
};

export default actions;
