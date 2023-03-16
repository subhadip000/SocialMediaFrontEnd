import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BaseUrl = "https://testing-blog-server.onrender.com"
  // "http://127.0.0.1:4000" || "https://testing-blog-server.onrender.com";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

//register
export const UserRegisterAction = createAsyncThunk(
  "user/register",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/register`,
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

// Logout
export const UserLogoutAction = createAsyncThunk(
  "user/logout",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      localStorage.removeItem("userInfo")
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//My Profile
export const MyProfileAction = createAsyncThunk(
  "user/Profile",
  async (i, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.user;
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
    //Register
    builder.addCase(UserRegisterAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UserRegisterAction.fulfilled, (state, action) => {
      state.userInfo = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UserRegisterAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    
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

    //Logout
    builder.addCase(UserLogoutAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UserLogoutAction.fulfilled, (state, action) => {
      state.userInfo = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UserLogoutAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

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
