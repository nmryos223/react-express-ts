import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "../Menu";
import { Router as PlatformRouter } from "../Router";
import style from "./style.module.scss";

const App: React.FC = () => {
  return (
    <div className={style.container}>
      {/* 浮かせておく要素は要素は、外だししておく */}
      <Menu />
      <BrowserRouter>
        <PlatformRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
