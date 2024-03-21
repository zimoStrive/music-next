import {
  ISearchSuggest,
  getSearchSuggestData,
  getIpBannerData,
} from "@/service/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IInialState {
  navbar: ISearchSuggest;
  banners: any[];
}

const homeSlice = createSlice({
  name: "home",
  initialState: {
    navbar: {},
    banners: [],
  } as IInialState,
  reducers: {
    changeNavbarAction(state, { payload }) {
      state.navbar = payload;
    },
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
  },
});

// // 异步action
export const fetchHomeInfoDataAction = createAsyncThunk(
  "fetchHomeInfoData",
  async (params: any, { dispatch }) => {
    const searchSuggestData = await getSearchSuggestData();
    dispatch(changeNavbarAction(searchSuggestData.data));
    const ipBannerData = await getIpBannerData();
    dispatch(changeBannersAction(ipBannerData.data.banners));
  }
);

// // 同步action
export const { changeNavbarAction, changeBannersAction } = homeSlice.actions;
export default homeSlice.reducer;
