import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonService } from "../../api/commonService";

export const fetchAllProducts = createAsyncThunk("fetchProducts", async () => {
  const { data } = await commonService.products();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default productSlice.reducer;
