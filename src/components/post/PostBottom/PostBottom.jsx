import React from "react";
import { Likes } from "./Likes/Likes";
import { FaShareAlt } from "react-icons/fa";
import { Comments } from "./Comments/Comments";

export const PostBottom = ({ post, myInfo }) => {
  return (
    <div className="postBottom">
      <div className="postBottomLeft">
        <Likes myInfo={myInfo} />

        <Comments post={post} />
      </div>
      <div className="postBottomRight">
        <span className="postShareText">
          <FaShareAlt />
        </span>
      </div>
    </div>
  );
};
