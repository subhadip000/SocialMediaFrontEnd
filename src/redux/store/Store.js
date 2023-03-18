import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";
import PostSlice from "../slices/PostSlice";
import UserSlice from "../slices/UserSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    post: PostSlice,
    auth: AuthSlice,
  },
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;
