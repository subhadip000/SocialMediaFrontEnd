import React from "react";
import Post from "../post/Post";
import PostCreate from "../PostCreate/PostCreate";
import Stories from "../stories/Stories";
import "./Feed.css";

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Stories />
                <PostCreate/>
                <Post />
            </div>
        </div>
    );
};

export default Feed;