import { ISearchSuggest, getSearchSuggestData } from "@/service/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface IInialState {
  navbar: ISearchSuggest;
}

const homeSlice = createSlice({
  name: "home",
  initialState: {
    navbar: {},
  } as IInialState,
  reducers: {
    changeNavbarAction(state, action) {
      state.navbar = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.home, //hydrate home数据
      };
    });
  },
});

// 异步action
export const fetchHomeInfoDataAction = createAsyncThunk(
  "fetchHomeInfoData",
  async (params: any, { dispatch }) => {
    const searchSuggestData = await getSearchSuggestData();
    dispatch(homeSlice.actions.changeNavbarAction(searchSuggestData.data));
  }
);

// 同步action
export const { changeNavbarAction } = homeSlice.actions;
export default homeSlice.reducer;
