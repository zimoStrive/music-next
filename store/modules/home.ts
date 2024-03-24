import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ISearchSuggest,
  IHomeInfo,
  IProduct,
  getSearchSuggestData,
  getHomeInfoData,
  getHotProductV2Data,
  getAllProductData,
} from "@/service/home";

interface IInialState {
  navbar: ISearchSuggest;
  homeInfo: IHomeInfo;
  hotProduct: IProduct;
  allProducts: IProduct;
}

const homeSlice = createSlice({
  name: "home",
  initialState: {
    navbar: {},
    homeInfo: {},
    hotProductData: {},
    allProduct: {},
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
    changeAllProductDat(state, { payload }) {
      state.allProduct = payload;
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
    const allProductData = await getAllProductData();
    dispatch(changeAllProductDat(allProductData.data));
  }
);

// // 同步action
export const {
  changeNavbarAction,
  changeBannersAction,
  changeHotProductAction,
  changeAllProductDat,
} = homeSlice.actions;
export default homeSlice.reducer;
