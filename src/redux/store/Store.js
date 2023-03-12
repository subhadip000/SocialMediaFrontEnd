import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../slices/UserSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;
