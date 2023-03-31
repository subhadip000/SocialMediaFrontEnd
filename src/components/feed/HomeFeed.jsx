import React from "react";
import Post from "../post/Post";
import PostCreate from "../PostCreate/PostCreate";
import Stories from "../stories/Stories";
import "./Feed.css";

const HomeFeed = ({post, isStory }) => {
  // console.log("profileInfo",profileInfo);
  
  // console.log(post);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {isStory?<Stories />:null}
        
        <PostCreate />
        {post?.map((e, i) => {
          return <Post post={e} key={i} profileInfo={e.author} />;
        })}
      </div>
    </div>
  );
};

export default HomeFeed;
