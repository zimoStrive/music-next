import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductDetailData, IDetailProduct } from "@/service/detail";

interface IInialState {
  searchProducts: IDetailProduct;
}

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailProducts: {},
  } as IInialState,
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailProducts = payload;
    },
  },
});

// // 异步action
export const fetchDetailProductsDataAction = createAsyncThunk(
  "fetchDetailData",
  async (id: Number, { dispatch }) => {
    const productDetailData = await getProductDetailData(id);
    dispatch(changeDetailInfoAction(productDetailData.data));
  }
);

// // 同步action
export const { changeDetailInfoAction } = detailSlice.actions;
export default detailSlice.reducer;
