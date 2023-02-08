import React from "react";
import { Ranking } from "../../libs/utils/types";
import style from "./style.module.scss";

/**
 * ランキング表示
 */
const Component: React.FC<{
  /**
   * ランキングリスト
   */
  list: Ranking[];
  /**
   * クリック時
   */
  onClick: (id: number) => void;
}> = ({ list }) => {
  return (
    <div className={style.container}>
      {list.map((d, i) => (
        <div key={i}>
          <div>{d.rank}</div>
          <div>{d.title}</div>
          <div>{d.uuid}</div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Component);
