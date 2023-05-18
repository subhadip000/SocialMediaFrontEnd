import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import Popup from "../../../popup/Popup";
import { LikePopup } from "./LikePopup/LikePopup";
import { usePost } from "../../../../context/post";

export const Likes = ({ myInfo }) => {
  const { LikePost, post } = usePost();
  const [isLike, setIsLiked] = useState(false);

  useEffect(() => {
    const isIt = post?.likedBy?.find(
      (e) => e.toString() === myInfo?.id.toString()
    );
    if (isIt) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [post]);

  const LikeHandler = () => {
    LikePost(post?.id);
    console.log("liking");
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
        {post?.likes} Likes
      </span>
      <Popup trigger={likePopup} setTrigger={setLikePopup} name={"Likes"}>
        {post?.LikedBy?.map((user) => (
          <LikePopup key={user.id} user={user} myInfo={myInfo} />
        ))}
      </Popup>
    </div>
  );
};
