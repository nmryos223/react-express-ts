import { configureStore } from "@reduxjs/toolkit";
import reducer from "./ducks";
export { actions, selectors } from "./ducks";

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;
const store = configureStore({ reducer });

export default store;
