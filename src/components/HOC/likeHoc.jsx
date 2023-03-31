import React, { useState } from "react";

const withLike = (Component) => {
  const NewComponent = ({ post, profileInfo }) => {
    const [isLike, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    return (
      <Component
        isLike={isLike}
        post={post}
        profileInfo={profileInfo}
        setIsLiked={setIsLiked}
        likeCount={likeCount}
        setLikeCount={setLikeCount}
      />
    );
  };
  return NewComponent;
};

export default withLike;