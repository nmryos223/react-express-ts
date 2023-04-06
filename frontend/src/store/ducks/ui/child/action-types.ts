import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("ui/child");

const actions = {
  setIsOpenIntroduction: actionCreator<boolean>("SET_IS_OPEN_INTRODUCTION"),
};

export default actions;
