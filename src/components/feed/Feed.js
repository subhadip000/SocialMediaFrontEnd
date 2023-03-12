import React from "react";
import Post from "../post/Post";
import Stories from "../stories/Stories";
import "./Feed.css";

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Stories />
                <Post />
            </div>
        </div>
    );
};

export default Feed;