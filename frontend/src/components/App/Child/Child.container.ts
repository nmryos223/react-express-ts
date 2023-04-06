import { connect } from "react-redux";
import { RootState, selectors } from "../../../store";
import Component from "./Child";

interface StateToProps {
  isOpenIntroduction: boolean;
}

const mapStateToProps = (state: RootState): StateToProps => ({
  isOpenIntroduction: selectors.ui.child.isOpenIntroduction(state),
});

export default connect(mapStateToProps)(Component);
