import {
  ISearchSuggest,
  IHomeInfo,
  IProduct,
  getSearchSuggestData,
  getHomeInfoData,
  getHotProductV2Data,
} from "@/service/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IInialState {
  navbar: ISearchSuggest;
  homeInfo: IHomeInfo;
  hotProduct: IProduct;
}

const homeSlice = createSlice({
  name: "home",
  initialState: {
    navbar: {},
    homeInfo: {},
    hotProductData: {},
  } as IInialState,
  reducers: {
    changeNavbarAction(state, { payload }) {
      state.navbar = payload;
    },
    changeBannersAction(state, { payload }) {
      state.homeInfo = payload;
    },
    changeHotProductAction(state, { payload }) {
      state.hotProductData = payload;
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
    const hotProductData = await getHotProductV2Data();
    dispatch(changeHotProductAction(hotProductData.data));
  }
);

// // 同步action
export const {
  changeNavbarAction,
  changeBannersAction,
  changeHotProductAction,
} = homeSlice.actions;
export default homeSlice.reducer;
