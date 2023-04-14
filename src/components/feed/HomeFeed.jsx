import React, { useState } from "react";
import Post from "../post/Post";
import PostCreate from "../PostCreate/PostCreate";
import Stories from "../stories/Stories";
import "./Feed.css";
import { usePost } from "../../context/PostContext";
import { useEffect } from "react";

const HomeFeed = ({ isStory }) => {
  const { id, fetchAllPostId } = usePost();

  useEffect(() => {
    fetchAllPostId();
  }, []);

  const reversedPost = id?.slice().reverse();
  return (
    <div className="feed">
      <div className="feedWrapper">
        {isStory ? <Stories /> : null}

        <PostCreate />
        {reversedPost?.map((e) => {
          return <Post id={e} key={e} />;
        })}
      </div>
    </div>
  );
};

export default HomeFeed;
