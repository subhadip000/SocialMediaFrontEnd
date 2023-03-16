import React from "react";
import Post from "../post/Post";
import PostCreate from "../PostCreate/PostCreate";
import Stories from "../stories/Stories";
import "./Feed.css";

const Feed = ({post}) => {
  
  // console.log(post);
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
