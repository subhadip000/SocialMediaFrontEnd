import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const BaseUrl =
//   "http://127.0.0.1:4000" || "https://testing-blog-server.onrender.com";
const BaseUrl = "https://testing-blog-server.onrender.com";
// const BaseUrl = "http://socia-env.eba-fq6zfx3w.ap-south-1.elasticbeanstalk.com";

// posts fetch
export const FetchPostAction = createAsyncThunk(
  "posts/fetch",
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

// Fetch My Posts
export const FetchMyPostsAction = createAsyncThunk(
  "post/my-posts",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const configToken = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.get(
        `${BaseUrl}/api/post/my-posts`,
        configToken
      );
      console.log("My posts action");
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Fetch User Posts
export const FetchUserPostsAction = createAsyncThunk(
  "post/user-posts",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const configToken = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.get(
        `${BaseUrl}/api/post/posts-of/${input}`,
        configToken
      );
      console.log("User posts action");
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// post fetch
export const FetchSinglePostAction = createAsyncThunk(
  "post/fetch",
  async (postId, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const configToken = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    console.log("single post");
    try {
      const { data } = await axios.get(
        `${BaseUrl}/api/post/${postId}`,
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

      for (let i = 0; i < postImg.length; i++) {
        formData.append("image", postImg[i]);
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

// update post
export const UpdatePostAction = createAsyncThunk(
  "post/update",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/post/update`,
        input,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

// delete post
export const deletePostAction = createAsyncThunk(
  "post/delete",
  async (postId, { rejectWithValue, getState, dispatch }) => {
    ///http
    const user = getState()?.auth;
    const { userInfo } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.delete(
        `${BaseUrl}/api/post/delete/${postId}`,
        config
      );
      //dispatch for redirect
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// post like action
export const postLikesAction = createAsyncThunk(
  "post/like",
  async (postId, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth;
    const { userInfo } = user;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/post/like`,
        { postId },
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Create Comment Action
export const CreateCommentAction = createAsyncThunk(
  "comment/create",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const userInfo = getState()?.auth?.userInfo;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.post(
        `${BaseUrl}/api/comment/create`,
        input,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Update Comment Action
export const UpdateCommentAction = createAsyncThunk(
  "comment/update",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const userInfo = getState()?.auth?.userInfo;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/comment/update`,
        input,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Like Comment Action
export const LikeCommentAction = createAsyncThunk(
  "comment/like",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const userInfo = getState()?.auth?.userInfo;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/comment/like`,
        input,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Delete Comment Action
export const DeleteCommentAction = createAsyncThunk(
  "comment/delete",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const userInfo = getState()?.auth?.userInfo;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.put(
        `${BaseUrl}/api/comment/delete`,
        input,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Fetch Post wise Comments
export const FetchPostCommentsAction = createAsyncThunk(
  "comment/postWise-comments",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const userInfo = getState()?.auth?.userInfo;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.get(
        `${BaseUrl}/api/comment/comments/${input}`,
        config
      );
      console.log("FetchPostCommentsAction is called");
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Fetch Single Comment Action
export const FetchSingleCommentAction = createAsyncThunk(
  "comment/fetch-single",
  async (input, { rejectWithValue, getState, dispatch }) => {
    const userInfo = getState()?.auth?.userInfo;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.token}`,
      },
    };
    try {
      const { data } = await axios.get(
        `${BaseUrl}/api/comment/${input}`,
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
    //posts fetch
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

    // fetch my posts
    builder.addCase(FetchMyPostsAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchMyPostsAction.fulfilled, (state, action) => {
      state.myPosts = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchMyPostsAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // fetch user posts
    builder.addCase(FetchUserPostsAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchUserPostsAction.fulfilled, (state, action) => {
      state.userPosts = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchUserPostsAction.rejected, (state, action) => {
      state.isLoading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //post fetch
    builder.addCase(FetchSinglePostAction.pending, (state, action) => {
      state.isLoading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchSinglePostAction.fulfilled, (state, action) => {
      state.SinglePost = action?.payload;
      state.isLoading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchSinglePostAction.rejected, (state, action) => {
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

    // post update
    builder.addCase(UpdatePostAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(UpdatePostAction.fulfilled, (state, action) => {
      state.postUpdated = action?.payload;
      state.loading = false;
      state.isCreated = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UpdatePostAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //post delete
    builder.addCase(deletePostAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deletePostAction.fulfilled, (state, action) => {
      state.postDeleted = action?.payload;
      state.isDeleted = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deletePostAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //post like slice
    builder.addCase(postLikesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(postLikesAction.fulfilled, (state, action) => {
      state.like = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(postLikesAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Create Comment
    builder.addCase(CreateCommentAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(CreateCommentAction.fulfilled, (state, action) => {
      state.comment = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(CreateCommentAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Update Comment
    builder.addCase(UpdateCommentAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(UpdateCommentAction.fulfilled, (state, action) => {
      state.updatedComment = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(UpdateCommentAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Like Comment
    builder.addCase(LikeCommentAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(LikeCommentAction.fulfilled, (state, action) => {
      state.likedComment = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(LikeCommentAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Delete Comment
    builder.addCase(DeleteCommentAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(DeleteCommentAction.fulfilled, (state, action) => {
      state.deletedComment = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(DeleteCommentAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Fetch Post wise Comments
    builder.addCase(FetchPostCommentsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchPostCommentsAction.fulfilled, (state, action) => {
      state.Comments = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchPostCommentsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    // Fetch Single Comment
    builder.addCase(FetchSingleCommentAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FetchSingleCommentAction.fulfilled, (state, action) => {
      state.singleComment = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(FetchSingleCommentAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default PostSlice.reducer;
