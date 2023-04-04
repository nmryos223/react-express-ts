import React from "react";
import style from "./style.module.scss";
/**
 * モーダル表示
 */
const Component: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={style["container"]}>
      <div className={style["modal"]}>{children}</div>
    </div>
  );
};

export default React.memo(Component);
