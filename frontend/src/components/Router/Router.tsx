import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { path } from "../../libs/utils/path";

const Component: React.FC = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path={path.top} element={<></>} />
      {/* 直叩きで別のURL入力した際には、TOPにリダイレクトさせておく */}
      <Route path="*" element={<Navigate to={path.top} />} />
    </Routes>
  );
};

export default React.memo(Component);
