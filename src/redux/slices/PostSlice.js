import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BaseUrl =
  "http://127.0.0.1:4000" || "https://testing-blog-server.onrender.com";

// Login
export const FetchPostAction = createAsyncThunk(
  "post/fetch",
  async (i, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.user;
    const { userInfo } = user;
    const configToken = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.get(`${BaseUrl}/api/post/`, configToken);

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Then, handle actions in your reducers:
const PostSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    //Register
    builder.addCase(FetchPostAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchPostAction.fulfilled, (state, action) => {
      state.Post = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchPostAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default PostSlice.reducer;
