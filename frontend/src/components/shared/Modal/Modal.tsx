import React from "react";
import style from "./style.module.scss";
import { motion } from "framer-motion";
/**
 * モーダル表示
 */
const Component: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={style["container"]}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={style["modal"]}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default React.memo(Component);
