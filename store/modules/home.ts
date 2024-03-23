import {
  ISearchSuggest,
  getSearchSuggestData,
  getHomeInfoData,
} from "@/service/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IInialState {
  navbar: ISearchSuggest;
  banners: any[];
  categorys: any[];
  recommends: any[];
}

const homeSlice = createSlice({
  name: "home",
  initialState: {
    navbar: {},
    banners: [],
    categorys: [],
    recommends: [],
  } as IInialState,
  reducers: {
    changeNavbarAction(state, { payload }) {
      state.navbar = payload;
    },
    changeBannersAction(state, { payload }) {
      state.banners = payload.banners;
      state.categorys = payload.categorys;
      state.recommends = payload.recommends;
    },
  },
});

// // 异步action
export const fetchHomeInfoDataAction = createAsyncThunk(
  "fetchHomeInfoData",
  async (params: any, { dispatch }) => {
    const searchSuggestData = await getSearchSuggestData();
    dispatch(changeNavbarAction(searchSuggestData.data));
    const homeInfoData = await getHomeInfoData();
    dispatch(changeBannersAction(homeInfoData.data));
  }
);

// // 同步action
export const { changeNavbarAction, changeBannersAction } = homeSlice.actions;
export default homeSlice.reducer;
