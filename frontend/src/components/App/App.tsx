import * as React from "react";
import { Menu } from "../Menu";
import { Map } from "../Map";
import style from "./style.module.scss";

const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Map />
      <Menu />
    </div>
  );
};

export default App;
