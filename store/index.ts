"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
