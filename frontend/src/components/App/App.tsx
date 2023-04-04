import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router as PlatformRouter } from "../Router";
import style from "./style.module.scss";
import { Header } from "./Header";
import { Child } from "./Child";

const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      {/* 浮かせておく要素は要素は、外だししておく */}
      <BrowserRouter>
        <PlatformRouter />
      </BrowserRouter>
      <Child />
    </div>
  );
};

export default App;
