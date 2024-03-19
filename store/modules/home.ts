import { ISearchSuggest, getSearchSuggestData } from "@/service/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IInialState {
  navbar: ISearchSuggest;
}

const homeSlice = createSlice({
  name: "home",
  initialState: {
    navbar: {},
  } as IInialState,
  reducers: {
    changeNavbarAction(state, { payload }) {
      state.navbar = payload;
    },
  },
});

// // 异步action
export const fetchHomeInfoDataAction = createAsyncThunk(
  "fetchHomeInfoData",
  async (params: any, { dispatch }) => {
    const searchSuggestData = await getSearchSuggestData();
    console.log(searchSuggestData, "123");
    dispatch(changeNavbarAction(searchSuggestData.data));
  }
);

// // 同步action
export const { changeNavbarAction } = homeSlice.actions;
export default homeSlice.reducer;
