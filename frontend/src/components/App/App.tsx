import * as React from "react";
import { Header } from "../Header";
import { Map } from "../Map";
import style from "./style.module.scss";

const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Map />
      <Header />
    </div>
  );
};

export default App;
