import React, { createContext, useContext } from "react";
import useProvidePost from "../../hooks/post/useProvidePost";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const Post = useProvidePost();
  return <PostContext.Provider value={Post}>{children}</PostContext.Provider>;
};

export default PostProvider;

export const usePost = () => {
  return useContext(PostContext);
};
