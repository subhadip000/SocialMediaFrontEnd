import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const BaseUrl = "https://testing-blog-server.onrender.com"
const BaseUrl =
  "http://127.0.0.1:4000" || "https://testing-blog-server.onrender.com";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

//My Profile
export const MyProfileAction = createAsyncThunk(
  "user/Profile",
  async (i, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const configToken = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    // console.log(configToken);

    try {
      const { data } = await axios.get(
        `${BaseUrl}/api/user/profile`,
        configToken
      );
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
const UserSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    //My Profile
    builder.addCase(MyProfileAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(MyProfileAction.fulfilled, (state, action) => {
      state.myInfo = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(MyProfileAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default UserSlice.reducer;
