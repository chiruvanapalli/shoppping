import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import userDetailSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    userLoginDetails: userDetailSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
