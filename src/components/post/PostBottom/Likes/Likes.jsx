import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Popup from "../../../popup/Popup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postLikesAction } from "../../../../redux/slices/PostSlice";
import { LikePopup } from "./LikePopup/LikePopup";

export const Likes = ({
  post,
  myInfo,
  setIsLiked,
  setLikeCount,
  likeCount,
  isLike,
}) => {
  const dispatch = useDispatch();

  const LikeHandler = () => {
    setLikeCount((count) => (isLike ? count - 1 : count + 1));
    setIsLiked((current) => !current);
    dispatch(postLikesAction(post?.id));
  };

  const [likePopup, setLikePopup] = useState(false);

  return (
    <div className="LikeComment">
      <FaHeart
        className="bottomLeftIcon"
        onClick={LikeHandler}
        color={isLike ? "#fc0341" : ""}
      />
      <span
        className="postLikeCounter"
        onClick={() => {
          setLikePopup(true);
        }}
      >
        {likeCount} Likes
      </span>
      <Popup trigger={likePopup} setTrigger={setLikePopup} name={"Likes"}>
        {post?.LikedBy?.map((user) => (
          <LikePopup key={user.id} user={user} myInfo={myInfo} />
        ))}
      </Popup>
    </div>
  );
};
