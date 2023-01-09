import { ClickAwayListener } from "@mui/base";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import React from "react";
import { Subject } from "rxjs";
import style from "./style.module.scss";
import { Color, Style } from "../../libs/styles";

const iconVariants: Variants = {
  initial: {
    scale: 1,
    background: Color.Black,
    border: "none",
  },
  hover: {
    scale: 1.2,
    background: Color.DarkPurple,
  },
  open: {
    scale: 1,
    background: Color.DarkPurple,
  },
};

const topLineVariants: Variants = {
  close: {
    top: "0%",
    transform: "rotate(0deg)",
  },
  open: {
    top: "50%",
    transform: "rotate(-45deg)",
  },
};

const middleLineVariants: Variants = {
  close: {
    opacity: 1,
  },
  open: {
    opacity: 0,
  },
};

const bottomLineVariants: Variants = {
  close: {
    top: "0%",
    transform: "rotate(0deg)",
  },
  open: {
    top: "calc(-50% + 1px)",
    transform: "rotate(-135deg)",
  },
};

const Component: React.FC<{
  isMenu: boolean;
  toggleMenu: () => void;
}> = ({ isMenu, toggleMenu }) => {
  const lineAnimate = useAnimation();
  const iconAnimate = useAnimation();

  /**
   * メニューの表示状態を通知する
   */
  const menuChangeRef = React.useRef<Subject<boolean>>(new Subject());
  React.useEffect(() => {
    const subscription = menuChangeRef.current.subscribe((isMenu) => {
      lineAnimate.start(isMenu ? "open" : "close");
      iconAnimate.start(isMenu ? "open" : "initial");
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [iconAnimate, lineAnimate]);
  React.useEffect(() => {
    menuChangeRef.current.next(isMenu);
  }, [isMenu]);

  /**
   * コンポーネント外押下で閉じる(切り替える)
   * 表示中のみ実行することで実質閉じる固定
   */
  const handleClickAway = React.useCallback(() => {
    if (isMenu) {
      toggleMenu();
    }
  }, [isMenu, toggleMenu]);

  /**
   * アイコンホバー制御
   */
  const handleHoverStart = React.useCallback(() => {
    if (!isMenu) {
      iconAnimate.start("hover");
    }
  }, [iconAnimate, isMenu]);
  const handleHoverEnd = React.useCallback(() => {
    if (!isMenu) {
      iconAnimate.start("initial");
    }
  }, [iconAnimate, isMenu]);
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={style.container}>
        <AnimatePresence mode="wait" initial={false}>
          {isMenu && (
            <motion.div
              className={style.menu}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <div>
                <div className={`${style.text} ${Style.paragraphM}`}>
                  プロフィール
                </div>
              </div>
              <div>
                <div className={`${style.text} ${Style.paragraphM}`}>
                  リスト
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className={style.iconWrapper}
          onClick={toggleMenu}
          animate={iconAnimate}
          variants={iconVariants}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          <motion.span
            className={style.iconLine1}
            animate={lineAnimate}
            variants={topLineVariants}
          />
          <motion.span
            className={style.iconLine2}
            animate={lineAnimate}
            variants={middleLineVariants}
          />
          <motion.span
            className={style.iconLine3}
            animate={lineAnimate}
            variants={bottomLineVariants}
          />
        </motion.div>
      </div>
    </ClickAwayListener>
  );
};

export default Component;
