import { PHONE_SCREEN_WIDTH_LIMIT } from "./constants";

/**
 * PCかどうか
 */
export function isPC() {
  return window.screen.width > PHONE_SCREEN_WIDTH_LIMIT;
}
