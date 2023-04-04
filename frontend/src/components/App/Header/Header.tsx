import React from "react";
import style from "./style.module.scss";
import { Style } from "../../../libs/styles";
import { MdMenuBook } from "react-icons/md";
import { TITLE } from "../../../libs/utils/constants";
import { Phone } from "../../shared";

/**
 * ヘッダー
 * SP, PC共通: タイトル
 * SP: メニューボタン
 */
const Component: React.FC<{
  onClickMenu: () => void;
}> = ({ onClickMenu }) => {
  return (
    <div className={style["container"]}>
      <span className={`${Style.paragraphL} ${Style.bold}`}>{TITLE}</span>
      <Phone>
        <MdMenuBook className={style["icon"]} onClick={onClickMenu} />
      </Phone>
    </div>
  );
};

export default Component;
