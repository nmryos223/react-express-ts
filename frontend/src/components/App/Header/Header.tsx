import React from "react";
import style from "./style.module.scss";
import { Style } from "../../../libs/styles";
import { MdMenuBook } from "react-icons/md";
import { TITLE } from "../../../libs/utils/constants";
import { Phone } from "../../shared";

/**
 * ヘッダー
 * SP, PC共通: タイトル
 * SP: 本ボタン
 */
const Component: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <div className={style["container"]}>
      <span className={`${Style.paragraphL} ${Style.bold}`}>{TITLE}</span>
      <Phone>
        <MdMenuBook className={style["icon"]} onClick={onClick} />
      </Phone>
    </div>
  );
};

export default Component;
