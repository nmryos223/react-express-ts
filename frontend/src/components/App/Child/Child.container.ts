import { connect } from "react-redux";
import { RootState, selectors } from "../../../store";
import Component from "./Child";

interface StateToProps {
  isOpenMenu: boolean;
}

const mapStateToProps = (state: RootState): StateToProps => ({
  isOpenMenu: selectors.ui.child.isOpenMenu(state),
});

export default connect(mapStateToProps)(Component);
