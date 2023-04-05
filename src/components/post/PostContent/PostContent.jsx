import React, { useState } from "react";
import ImageSwiper from "../../Swiper/ImageSwiper";
import Popup from "../../popup/Popup";
import { useDispatch } from "react-redux";
import { UpdatePostAction } from "../../../redux/slices/PostSlice";

export const PostContent = ({ post, isEdit, setIsEdit }) => {
  const dispatch = useDispatch();

  const ImgArrayLen = post?.image?.length || 0;

  const [caption, setCaption] = useState(post?.caption);

  return (
    <div className="postCenter">
      {!isEdit ? (
        <p className="postText">{post?.caption}</p>
      ) : (
        <Popup trigger={isEdit} setTrigger={setIsEdit} name={"Update Caption"}>
          <input
            type="text"
            name="caption"
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <input
            type="button"
            value="Update"
            disabled={caption === post?.caption}
            onClick={() => {
              dispatch(
                UpdatePostAction({ id: post?.id, caption })
              );
              setIsEdit((prev) => (prev = false));
            }}
          />
        </Popup>
      )}
      {/* <img src={post?.image} alt="" className="postImg" /> */}
      {ImgArrayLen === 0 ? null : ImgArrayLen === 1 ? (
        <img src={post?.image[0]} alt="" className="postImg" />
      ) : (
        <div className="sliderContainer">
          <ImageSwiper images={post?.image} />
        </div>
      )}
    </div>
  );
};
