import React from "react";
import { useMediaQuery } from "react-responsive";
import { PHONE_SCREEN_WIDTH_LIMIT } from "../../libs/utils/constants";

const minWidth = PHONE_SCREEN_WIDTH_LIMIT - 1;

export const Phone: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isPc = useMediaQuery({
    query: `(min-width: ${minWidth}px)`,
  });

  if (isPc) {
    return null;
  }
  return <>{children}</>;
};
export const Desktop: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isPc = useMediaQuery({
    query: `(min-width: ${minWidth}px)`,
  });
  if (!isPc) {
    return null;
  }
  return <>{children}</>;
};
