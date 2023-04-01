import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BaseUrl = "https://testing-blog-server.onrender.com"
// const BaseUrl =
//   "http://127.0.0.1:4000" || "https://testing-blog-server.onrender.com";

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

// Email Verification Otp
export const EmailVerifyAction = createAsyncThunk(
  "auth/verify-email",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const auth = getState()?.auth;
    const { userInfo } = auth;
    console.log("token: ", userInfo?.token);
    const configToken = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.get(
        `${BaseUrl}/api/user/verify-email`,
        configToken
      );
      return data;
    } catch (error) {
      console.log(error);
      if (error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Email Verification Success
export const EmailVerifyOtpAction = createAsyncThunk(
  "auth/verification",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const { userInfo } = getState()?.auth;
    console.log(userInfo?.token);
    const configToken = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/verification`,
        input,
        configToken
      );
      return data;
    } catch (error) {
      if (error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Update Password
export const UpdatePasswordAction = createAsyncThunk(
  "auth/update-pass",
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
        `${BaseUrl}/api/user/update-password`,
        input,
        configToken
      );
      return data;
    } catch (error) {
      if (error?.response) throw error;
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
export const PopupConfirmAction = createAction("auth/PopupAction");

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

    // Send otp for Email Verification
    builder.addCase(EmailVerifyAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(EmailVerifyAction.fulfilled, (state, action) => {
      state.otpSend = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(EmailVerifyAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Check Otp for email verification
    builder.addCase(EmailVerifyOtpAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(EmailVerifyOtpAction.fulfilled, (state, action) => {
      state.otpCheck = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(EmailVerifyOtpAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //Update Password
    builder.addCase(UpdatePasswordAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UpdatePasswordAction.fulfilled, (state, action) => {
      state.updatePass = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UpdatePasswordAction.rejected, (state, action) => {
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
      state.deactivate_acc = undefined;
      state.delete_acc = undefined;
    });
  },
});

export default AuthSlice.reducer;
