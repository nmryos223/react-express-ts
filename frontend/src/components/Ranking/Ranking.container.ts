import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Ranking } from "../../libs/utils/types";
import { RootState } from "../../store";
import RankingComponent from "./Ranking";

interface StateToProps {
  list: Ranking[];
}
const mapStateToProps = (state: RootState): StateToProps => ({
  list: [{ uuid: "test", id: 1, title: "たいとる", answerCount: 1, rank: 1 }],
});

interface DispatchToProps {
  onClick: (id: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
  onClick: (id: number) => {
    console.log("ランキングおうか", id);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingComponent);
