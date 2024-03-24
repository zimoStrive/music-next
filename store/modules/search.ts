import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ISearchProductResult,
  ISearchParam,
  getProductSearchData,
} from "@/service/search";

interface IInialState {
  searchProducts: ISearchProductResult;
}

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchProducts: {},
  } as IInialState,
  reducers: {
    changeSearchProductsAction(state, { payload }) {
      state.searchProducts = payload;
    },
  },
});

// // 异步action
export const fetchSearchProductsDataAction = createAsyncThunk(
  "fetchSearchData",
  async (params: ISearchParam, { dispatch }) => {
    const productSearchData = await getProductSearchData(params);
    dispatch(changeSearchProductsAction(productSearchData));
  }
);

// // 同步action
export const { changeSearchProductsAction } = searchSlice.actions;
export default searchSlice.reducer;
