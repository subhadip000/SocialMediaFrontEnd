import React from "react";
import Post from "../post/Post";
import PostCreate from "../PostCreate/PostCreate";
import Stories from "../stories/Stories";
import "./Feed.css";

const HomeFeed = ({ post, isStory }) => {
  // Reverse the post array
  const reversedPost = post?.slice().reverse();
  return (
    <div className="feed">
      <div className="feedWrapper">
        {isStory ? <Stories /> : null}

        <PostCreate />
        {reversedPost?.map((e, i) => {
          return <Post post={e} key={i} profileInfo={e.author} />;
        })}
      </div>
    </div>
  );
};

export default HomeFeed;
