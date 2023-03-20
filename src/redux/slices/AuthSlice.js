import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const BaseUrl = "https://testing-blog-server.onrender.com"
const BaseUrl = "http://127.0.0.1:4000" || "https://testing-blog-server.onrender.com";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
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

// Forget Password
export const ForgetPasswordAction = createAsyncThunk(
  "user/forget-pass",
  async(input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/forget-password`,
        input,
        config
      );
      return data;
    } catch (error) {
      if(!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)

// Change Password
export const ChangePasswordAction = createAsyncThunk(
  "user/change-pass",
  async(input, { rejectWithValue, getState, dispatch }) => {
    // console.log("input from action : ", input);
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/change-password`,
        input,
        config
      );
      
      return data;
    } catch (error) {
      if(!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)

// New Password
export const NewPasswordAction = createAsyncThunk(
  "user/new-pass",
  async(input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/new-password`,
        input,
        config
      );
      return data;
    } catch (error) {
      if(!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Then, handle actions in your reducers:
const AuthSlice = createSlice({
  name: "auth",
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

    // Forget Password
    builder.addCase(ForgetPasswordAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(ForgetPasswordAction.fulfilled, (state, action) => {
      state.forget_pass = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(ForgetPasswordAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Change Password
    builder.addCase(ChangePasswordAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(ChangePasswordAction.fulfilled, (state, action) => {
      state.token = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(ChangePasswordAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // New Password
    builder.addCase(NewPasswordAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(NewPasswordAction.fulfilled, (state, action) => {
      state.new_pass = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(NewPasswordAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

  },
});

export default AuthSlice.reducer;
