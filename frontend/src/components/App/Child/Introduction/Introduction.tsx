import React from "react";
import { Modal, ModalParts } from "../../../shared";
import style from "./style.module.scss";
import { Style } from "../../../../libs/styles";

/**
 * 説明コンポーネント
 */
const Component: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  return (
    <Modal>
      <ModalParts.Header title="使い方" onClose={onClose} />
      <div className={style["body"]}>
        <span className={`${Style["paragraphM"]} ${style["text"]}`}>
          家にあるお菓子を全部食べきっていませんか?
          <br />
          少しでも食べる・買うのを我慢したお菓子を記録して脂肪をなくしていこう
          <br />
          我慢することで体型に自信がついたり、出費をへらせるかも...
        </span>
      </div>
    </Modal>
  );
};

export default React.memo(Component);
