import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchPostAction } from "../../redux/slices/PostSlice";
import Post from "../post/Post";
import PostCreate from "../PostCreate/PostCreate";
import Stories from "../stories/Stories";
import "./Feed.css";

const Feed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchPostAction());
  }, [dispatch]);

  const post = useSelector((state) => state.post?.Post);
  console.log(post);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
        <PostCreate />
        {post ? post.map((e, i) => {
          return <Post post={e} key={i} />;
        }) : null}
      </div>
    </div>
  );
};

export default Feed;
