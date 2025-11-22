import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
