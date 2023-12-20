import React, { useEffect } from "react";
import Post from "../post/Post";
import PostProvider, { usePost } from "../../context/post";

const Posts = ({ id }) => {
  return (
    <PostProvider>
      <Render id={id} />
    </PostProvider>
  );
};

export default Posts;

const Render = ({ id }) => {
  const { FetchSinglePost, post } = usePost();
  useEffect(() => {
    FetchSinglePost(id);
    console.log("post-->", id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return <Post post={post} profileInfo={post?.author} />;
};
