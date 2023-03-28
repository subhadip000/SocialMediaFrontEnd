import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BaseUrl =
  "http://127.0.0.1:4000" || "https://testing-blog-server.onrender.com";

// Login
export const FetchPostAction = createAsyncThunk(
  "post/fetch",
  async (i, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
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


//create post action
export const createPostAction = createAsyncThunk(
  "post/create",
  async (post, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      // console.log("post?.image",post?.image);
      const formData = new FormData();
      formData.append("caption", post?.caption);
      const postImg = post?.image;
      console.log(postImg);

      // postImg.map((image)=>formData.append("image", image))
      // formData.append("image", postImg[0]);

      // postImg?.forEach(image => {
      //   formData.append("image", image);
      // });
      for (let i = 0; i < postImg.length; i++) {
        formData.append('image', postImg[i])
     }

      // post?.image.forEach((file) => formData.append("image", file));

      const { data } = await axios.post(
        `${BaseUrl}/api/post/create`,
        formData,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Then, handle actions in your reducers:
const PostSlice = createSlice({
  name: "post",
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


    //create post slice
    builder.addCase(createPostAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPostAction.fulfilled, (state, action) => {
      state.postCreated = action?.payload;
      state.loading = false;
      state.isCreated = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(createPostAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default PostSlice.reducer;
