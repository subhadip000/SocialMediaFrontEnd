import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const BaseUrl = "https://testing-blog-server.onrender.com"
const BaseUrl =
  "http://127.0.0.1:4000" || "https://testing-blog-server.onrender.com";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

//Register / Create Account
export const UserRegisterAction = createAsyncThunk(
  "auth/register",
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
  "auth/login",
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
  "auth/logout",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      localStorage.removeItem("userInfo");
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
  "auth/forget-pass",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/forget-password`,
        input,
        config
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

// Change Password
export const ChangePasswordAction = createAsyncThunk(
  "auth/change-pass",
  async (input, { rejectWithValue, getState, dispatch }) => {
    // console.log("input from action : ", input);
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/change-password`,
        input,
        config
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

// New Password
export const NewPasswordAction = createAsyncThunk(
  "auth/new-pass",
  async (input, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/new-password`,
        input,
        config
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

// Delete Account
export const DeleteAccountAction = createAsyncThunk(
  "auth/delete-account",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const auth = getState()?.auth;
    const { userInfo } = auth;
    const configToken = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    console.log(configToken);
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/user/deleteduser`,
        input,
        configToken
      );
      localStorage.removeItem("userInfo");
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Deactivate Account
export const DeactivateAccountAction = createAsyncThunk(
  "auth/deactivate-account",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const auth = getState()?.auth;
    const { userInfo } = auth;
    const configToken = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/user/inactive`,
        input,
        configToken
      );
      localStorage.removeItem("userInfo");
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Popup Confirmation Delete/Deactivate
export const PopupConfirmAction = createAction('auth/PopupAction')

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

    // Delete Account
    builder.addCase(DeleteAccountAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(DeleteAccountAction.fulfilled, (state, action) => {
      state.delete_acc = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(DeleteAccountAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Deactivate Account
    builder.addCase(DeactivateAccountAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(DeactivateAccountAction.fulfilled, (state, action) => {
      state.deactivate_acc = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(DeactivateAccountAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    
    // Popup Delete/Deactivate Confirmation
    builder.addCase(PopupConfirmAction, (state, action) => {
      state.userInfo = undefined;
    })
  },
});

export default AuthSlice.reducer;
