import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonService } from "../../api/commonService";

type Credentials = {
  email: string;
  password: string;
};

type AuthResponse = {
  token: string;
  [key: string]: any;
};

type AuthState = {
  data: AuthResponse | null;
  isLoading: boolean;
  error: string | null;
};

export const fetchUserDetails = createAsyncThunk<AuthResponse, Credentials>(
  "auth/login",
  async (credentials) => {
    const { data } = await commonService.login(credentials);
    return data;
  }
);

const initialState: AuthState = {
  data: null,
  isLoading: false,
  error: null,
};

const userDetailSlice = createSlice({
  name: "userLoginDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default userDetailSlice.reducer;
