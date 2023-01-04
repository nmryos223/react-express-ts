import React from "react";
import { Menu } from "../Menu";
import style from "./style.module.scss";

const Component: React.FC = () => {
  return (
    <div className={style.container}>
      <img
        src="/images/menu-icon.svg"
        alt="メニューアイコン"
        className={style.menuIcon}
      />
      <Menu />
    </div>
  );
};

export default Component;
