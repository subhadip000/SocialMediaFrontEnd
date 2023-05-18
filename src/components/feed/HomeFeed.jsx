import React from "react";
import Post from "../post/Post";
import PostCreate from "../PostCreate/PostCreate";
// import Stories from "../stories/Stories";
import "./Feed.css";
import Posts from "../Posts";

const HomeFeed = ({ post, isStory }) => {
  // Reverse the post array
  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* {isStory ? <Stories /> : null} */}

        <PostCreate />
        {post?.map((e, i) => {
          return <Posts id={e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default HomeFeed;
