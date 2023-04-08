import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const BaseUrl =
// "http://127.0.0.1:4000" || "https://testing-blog-server.onrender.com";
const BaseUrl = "https://testing-blog-server.onrender.com";
// const BaseUrl = "http://socia-env.eba-fq6zfx3w.ap-south-1.elasticbeanstalk.com";

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
//Edit Profile
export const editProfileAction = createAsyncThunk(
  "user/EditProfile",
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
      const { data } = await axios.post(
        `${BaseUrl}/api/user/update`,
        i,
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

//Edit Profile photo
export const editProfilePhotoAction = createAsyncThunk(
  "user/EditProfilePhoto",
  async (userImg, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const configToken = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    const formData = new FormData();
    console.log(userImg.url);
    formData.append("image", userImg);
    console.log(formData);
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/user/avatar-update`,
        formData,
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

// fetch all users
export const fetchUsersAction = createAsyncThunk(
  "users/fetch",
  async (users, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.get(`${BaseUrl}/api/user`, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// fetch user details
export const fetchUserDetailsAction = createAsyncThunk(
  "user/user-profile",
  async (id, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.get(`${BaseUrl}/api/user/${id}`, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//follow user action
export const userFollowAction = createAsyncThunk(
  "user/follow",
  async (userId, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/follow`,
        {
          Id: userId,
        },
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

// fetch followers
export const fetchFollowersAction = createAsyncThunk(
  "followers/fetch",
  async (userId, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/profile/my-followers`,
        {
          id: userId,
        },
        config
      );
      console.log("user slice", data);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// fetch following
export const fetchFolloweingAction = createAsyncThunk(
  "following/fetch",
  async (userId, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/user/profile/my-following`,
        {
          id: userId,
        },
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
    //Profile Edit
    builder.addCase(editProfileAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(editProfileAction.fulfilled, (state, action) => {
      state.myInfo = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(editProfileAction.rejected, (state, action) => {
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
    //Profile photo Edit
    builder.addCase(editProfilePhotoAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(editProfilePhotoAction.fulfilled, (state, action) => {
      state.myInfo = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(editProfilePhotoAction.rejected, (state, action) => {
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
    //users details
    builder.addCase(fetchUsersAction.pending, (state, action) => {
      state.profileLoading = true;
    });
    builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
      state.userList = action?.payload;
      state.profileLoading = false;
      state.profileAppErr = undefined;
      state.profileServerErr = undefined;
    });
    builder.addCase(fetchUsersAction.rejected, (state, action) => {
      state.profileAppErr = action?.payload?.message;
      state.profileServerErr = action?.error?.message;
      state.profileLoading = false;
    });
    //user details
    builder.addCase(fetchUserDetailsAction.pending, (state, action) => {
      state.profileLoading = true;
    });
    builder.addCase(fetchUserDetailsAction.fulfilled, (state, action) => {
      state.profile = action?.payload;
      state.profileLoading = false;
      state.profileAppErr = undefined;
      state.profileServerErr = undefined;
    });
    builder.addCase(fetchUserDetailsAction.rejected, (state, action) => {
      state.profileAppErr = action?.payload?.message;
      state.profileServerErr = action?.error?.message;
      state.profileLoading = false;
    });
    //user follow action
    builder.addCase(userFollowAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(userFollowAction.fulfilled, (state, action) => {
      state.followed = action?.payload;
      state.unfollowed = undefined;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(userFollowAction.rejected, (state, action) => {
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
      state.loading = false;
    });
    //followers details
    builder.addCase(fetchFollowersAction.pending, (state, action) => {
      state.profileLoading = true;
    });
    builder.addCase(fetchFollowersAction.fulfilled, (state, action) => {
      state.followerList = action?.payload;
      state.profileLoading = false;
      state.profileAppErr = undefined;
      state.profileServerErr = undefined;
    });
    builder.addCase(fetchFollowersAction.rejected, (state, action) => {
      state.profileAppErr = action?.payload?.message;
      state.profileServerErr = action?.error?.message;
      state.profileLoading = false;
    });
    //following details
    builder.addCase(fetchFolloweingAction.pending, (state, action) => {
      state.profileLoading = true;
    });
    builder.addCase(fetchFolloweingAction.fulfilled, (state, action) => {
      state.followingList = action?.payload;
      state.profileLoading = false;
      state.profileAppErr = undefined;
      state.profileServerErr = undefined;
    });
    builder.addCase(fetchFolloweingAction.rejected, (state, action) => {
      state.profileAppErr = action?.payload?.message;
      state.profileServerErr = action?.error?.message;
      state.profileLoading = false;
    });
  },
});

export default UserSlice.reducer;
