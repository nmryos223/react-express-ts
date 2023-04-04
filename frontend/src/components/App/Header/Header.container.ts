import { connect } from "react-redux";
import { Dispatch } from "redux";
import Component from "./Header";
import { actions } from "../../../store";

interface DispatchToProps {
  onClickMenu: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
  onClickMenu: () => {
    dispatch(actions.ui.child.setIsOpenMenu(true));
  },
});

export default connect(null, mapDispatchToProps)(Component);
