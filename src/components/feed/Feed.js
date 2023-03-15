import React from "react";
import Post from "../post/Post";
import PostCreate from "../PostCreate/PostCreate";
import Stories from "../stories/Stories";
import "./Feed.css";

const Feed = ({ post }) => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
        <PostCreate />
        {post.map((e, i) => {
          return <Post post={e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
