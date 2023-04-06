import { Dispatch } from "redux";
import { actions } from "../../../../store";
import { connect } from "react-redux";
import Component from "./Introduction";

interface DispatchProps {
  onClose: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onClose: () => {
    dispatch(actions.ui.child.setIsOpenIntroduction(false));
  },
});

export default connect(null, mapDispatchToProps)(Component);
