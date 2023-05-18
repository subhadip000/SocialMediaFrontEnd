import React, { useState } from "react";
import { memo } from "react";

const withLike = (Component) => {
  const NewComponent = ({ id, profileInfo }) => {
    const [isLike, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    return (
      <Component
        isLike={isLike}
        id={id}
        profileInfo={profileInfo}
        setIsLiked={setIsLiked}
        likeCount={likeCount}
        setLikeCount={setLikeCount}
      />
    );
  };
  return NewComponent;
};

export default memo(withLike);
