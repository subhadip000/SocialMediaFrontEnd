import React from "react";
import { Likes } from "./Likes/Likes";
import { FaShareAlt } from "react-icons/fa";
import { Comments } from "./Comments/Comments";

export const PostBottom = ({ Post, post, myInfo, setIsLiked, setLikeCount, likeCount, isLike }) => {
  return (
    <div className="postBottom">
      <div className="postBottomLeft">
        <Likes
          post={post}
          myInfo={myInfo}
          setIsLiked={setIsLiked}
          setLikeCount={setLikeCount}
          likeCount={likeCount}
          isLike={isLike}
        />

        <Comments post={post} Post={Post} />
      </div>
      <div className="postBottomRight">
        <span className="postShareText">
          <FaShareAlt />
        </span>
      </div>
    </div>
  );
};
