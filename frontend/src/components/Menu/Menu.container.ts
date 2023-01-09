import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actions, RootState, selectors } from "../../store";
import Component from "./Menu";

interface StateToProps {
  isMenu: boolean;
}

const mapStateToProps = (state: RootState): StateToProps => ({
  isMenu: selectors.ui.menu.isMenu(state),
});

interface LocalDispathcToProps {
  toggleMenu: (isMenu: boolean) => void;
}
const mapDispatchToProps = (dispatch: Dispatch): LocalDispathcToProps => ({
  toggleMenu: (isMenu) => {
    dispatch(actions.ui.menu.setIsMenu(isMenu));
  },
});

const mergeProps = (
  stateToProps: ReturnType<typeof mapStateToProps>,
  dispatchToProps: ReturnType<typeof mapDispatchToProps>
) => ({
  ...stateToProps,
  ...dispatchToProps,
  toggleMenu: () => dispatchToProps.toggleMenu(!stateToProps.isMenu),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Component);
