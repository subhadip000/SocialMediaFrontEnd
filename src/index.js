import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/Store";
import PostProvider from "./context/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PostProvider>
      <App />
    </PostProvider>
  </Provider>
);
