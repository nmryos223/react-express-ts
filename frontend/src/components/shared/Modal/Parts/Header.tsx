import React from "react";
import style from "./style.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Style } from "../../../../libs/styles";

/**
 * モーダルヘッダーコンポーネント
 */
const Component: React.FC<{
  title: string;
  onClose?: () => void;
}> = ({ title, onClose }) => {
  return (
    <div className={style["header"]}>
      {onClose && (
        <AiOutlineClose className={style["close"]} onClick={onClose} />
      )}
      <span className={`${Style["paragraphM"]} ${Style["bold"]}`}>{title}</span>
    </div>
  );
};

export default React.memo(Component);
