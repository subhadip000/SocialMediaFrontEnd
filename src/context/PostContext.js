import { createContext } from "react";
import useProvidePost from "../hooks/useProvidePost";
import { useContext } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const post = useProvidePost();
  return <PostContext.Provider value={post}>{children}</PostContext.Provider>;
};
export default PostProvider;

export const usePost = () => {
  return useContext(PostContext);
};
