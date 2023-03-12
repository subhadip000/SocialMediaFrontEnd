import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BaseUrl = "https://testing-blog-server.onrender.com";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
// Login
export const UserLoginAction = createAsyncThunk(
  "user/login",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/login`,
        input,
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Then, handle actions in your reducers:
const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo,
  },
  extraReducers: (builder) => {
    //Login
    builder.addCase(UserLoginAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UserLoginAction.fulfilled, (state, action) => {
      state.userInfo = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UserLoginAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    //register
  },
});

export default UserSlice.reducer;
