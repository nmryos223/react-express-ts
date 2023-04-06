import { AnimatePresence } from "framer-motion";
import React from "react";
import { Introduction } from "./Introduction";

/**
 * 子ウィンドウ
 */
const Component: React.FC<{
  isOpenIntroduction: boolean;
}> = ({ isOpenIntroduction }) => {
  return (
    <>
      <AnimatePresence>
        {isOpenIntroduction && <Introduction />}
      </AnimatePresence>
    </>
  );
};

export default Component;
