import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";

export const makeStore = () => {
  return configureStore({
    reducer: {
      home: homeReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
