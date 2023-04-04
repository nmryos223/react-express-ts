import { AnimatePresence } from "framer-motion";
import React from "react";
import { Modal } from "../../shared";

/**
 * 子ウィンドウ
 */
const Component: React.FC<{
  isOpenMenu: boolean;
}> = ({ isOpenMenu }) => {
  return (
    <>
      {isOpenMenu && (
        <AnimatePresence>
          <Modal>sasasa</Modal>
        </AnimatePresence>
      )}
    </>
  );
};

export default Component;
