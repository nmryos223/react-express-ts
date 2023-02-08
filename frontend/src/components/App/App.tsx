import * as React from "react";
import { Menu } from "../Menu";
import { Ranking } from "../Ranking";
import style from "./style.module.scss";

const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Menu />
      <Ranking />
    </div>
  );
};

export default App;
