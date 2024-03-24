import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import searchReducer from "./modules/search";
import detailReducer from "./modules/detail";

export const makeStore = () => {
  return configureStore({
    reducer: {
      home: homeReducer,
      search: searchReducer,
      detail: detailReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
