import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { path } from "../../libs/utils/path";
import { Ranking } from "../Ranking";

const Component: React.FC = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path={path.top} element={<Ranking />} />
      <Route path={path.ranking} element={<></>} />
      {/* 直叩きで別のURL入力した際には、TOPにリダイレクトさせておく */}
      <Route path="*" element={<Navigate to={path.top} />} />
    </Routes>
  );
};

export default React.memo(Component);
