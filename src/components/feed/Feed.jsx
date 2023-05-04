import React from "react";
import Post from "../post/Post";
import PostCreate from "../PostCreate/PostCreate";
import "./Feed.css";

const Feed = ({ post, profileInfo }) => {
  // Reverse the post array
  const reversedPost = post?.slice().reverse();
  return (
    <div className="feed">
      <div className="feedWrapper">
        <PostCreate />
        {reversedPost?.map((e, i) => {
          return <Post post={e} key={i} profileInfo={profileInfo} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
