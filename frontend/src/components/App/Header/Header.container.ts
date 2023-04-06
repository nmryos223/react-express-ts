import { connect } from "react-redux";
import { Dispatch } from "redux";
import Component from "./Header";
import { actions } from "../../../store";

interface DispatchToProps {
  onClick: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
  onClick: () => {
    dispatch(actions.ui.child.setIsOpenIntroduction(true));
  },
});

export default connect(null, mapDispatchToProps)(Component);
