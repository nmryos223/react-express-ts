import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "../Menu";
import { Router as PlatformRouter } from "../Router";

const App: React.FC = () => {
  return (
    <>
      {/* 浮かせておく要素は要素は、外だししておく */}
      <Menu />
      <BrowserRouter>
        <PlatformRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
