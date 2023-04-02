import React, { useEffect, useState } from "react";
import "./Post.css";
import Moment from "react-moment";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart, FaCommentAlt, FaShareAlt } from "react-icons/fa";
import Popup from "../popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { CreateCommentAction, postLikesAction } from "../../redux/slices/PostSlice";
import withLike from "../HOC/likeHoc";
import ImageSwiper from "../Swiper/ImageSwiper";
import { Link } from "react-router-dom";
import { Comment } from "./Comment/Comment";

const Post = ({
  post,
  profileInfo,
  setIsLiked,
  setLikeCount,
  likeCount,
  isLike,
}) => {
  console.log("profileInfo", profileInfo);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const Post = useSelector((state) => state?.post);
  const { myInfo } = user;
  const { like } = Post;

  const [likePopup, setLikePopup] = useState(false);
  const [commentPopup, setCommentPopup] = useState(false);

  const ImgArrayLen = post?.image?.length || 0;

  useEffect(() => {
    setLikeCount(like?.likes || post?.likes);
    const isIt = post?.likedBy?.find(
      (e) => e.toString() === myInfo?.id.toString()
    );
    if (isIt) {
      // console.log("res--", isIt);
      setIsLiked(true);
    }
  }, []);

  const LikeHandler = () => {
    setLikeCount((count) => (isLike ? count - 1 : count + 1));
    setIsLiked((current) => !current);
    dispatch(postLikesAction(post?.id));
  };

  const [commentSection, setCommentSection] = useState(false);
  const [comment, setComment] = useState("");

  const commentHandler = () => {
    console.log("postId from comment: ", post?.id);
    console.log("description of the comment: ", comment);
    setComment("")
    dispatch(CreateCommentAction({postId: post?.id, description: comment}))
  };

  
  const commentEditer = () => {
    console.log("For Update, commentId: ", post?.Comments[0]?.id, "& description: ", post?.Comments[0]?.description);
    console.log("post: ", post);
  }
  
  const commentDeleter = () => {
    console.log("For Delete, commentId: ", post?.Comments[0]?.id, "& description: ", post?.Comments[0]?.description);
    console.log("Post: ", Post);
  }

  // console.log("from post.jsx", post.LikedBy);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {profileInfo?.id === myInfo?.id ? (
              <Link to={"/profile"} className="Link">
                <img
                  src={profileInfo?.profilePhoto}
                  alt=""
                  className="postProfileImg"
                />
                <span className="postUsername">
                  {profileInfo?.firstName} {profileInfo?.lastName}
                </span>
              </Link>
            ) : (
              <Link to={`/user/${profileInfo?.id}`} className="Link">
                <img
                  src={profileInfo?.profilePhoto}
                  alt=""
                  className="postProfileImg"
                />
                <span className="postUsername">
                  {profileInfo?.firstName} {profileInfo?.lastName}
                </span>
              </Link>
            )}

            <span className="postDate">
              <Moment fromNow ago>
                {post?.createdAt}
              </Moment>
            </span>
          </div>
          <BsThreeDotsVertical />
        </div>
        <div className="postCenter">
          <p className="postText">{post?.caption}</p>
          {/* <img src={post?.image} alt="" className="postImg" /> */}
          {ImgArrayLen === 0 ? (
            ""
          ) : ImgArrayLen === 1 ? (
            <img src={post?.image[0]} alt="" className="postImg" />
          ) : (
            <div className="sliderContainer">
              <ImageSwiper images={post?.image} />
            </div>
          )}
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
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
              <Popup
                trigger={likePopup}
                setTrigger={setLikePopup}
                name={"Likes"}
              >
                {post?.LikedBy?.map((user) => (
                  <div className="PopupDiv">
                    {user?.id === myInfo?.id ? (
                      <Link to={"/profile"} className="Link">
                        <img
                          src={user.profilePhoto}
                          alt=""
                          className="PopupProfileImg"
                        />
                        <span className="PopupUsername">
                          {user.firstName} {user.lastName}
                        </span>
                      </Link>
                    ) : (
                      <Link to={`/user/${user?.id}`} className="Link">
                        <img
                          src={user.profilePhoto}
                          alt=""
                          className="PopupProfileImg"
                        />
                        <span className="PopupUsername">
                          {user.firstName} {user.lastName}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </Popup>
            </div>
            <div className="LikeComment">
              <FaCommentAlt className="bottomLeftIcon" />
              <span
                className="postLikeCounter"
                onClick={() => {
                  // setCommentPopup(true);
                  setCommentSection(!commentSection);
                }}
                onMouseOver={() => {
                  console.log("Show the popup");
                }}
                onMouseOut={() => {
                  console.log("Hide the popup")
                }}
              >
                {post?.Comments?.length} Comments
              </span>
              <Popup
                trigger={commentPopup}
                setTrigger={setCommentPopup}
                name={"Comments"}
              >
                <div className="PopupDiv">
                  <a href="/profile/userId">
                    <img
                      src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                      alt=""
                      className="PopupProfileImg"
                    />
                  </a>
                  <span className="PopupUsername">username</span>
                </div>
              </Popup>
            </div>
          </div>
          <div className="postBottomRight">
            <span className="postShareText">
              <FaShareAlt />
            </span>
          </div>
        </div>

        {commentSection && (
          <Comment
            commentHandler={commentHandler}
            postId={post?.id}
            comment={comment}
            setComment={setComment}
            Comments={post?.Comments}
            commentEditer={commentEditer}
            commentDeleter={commentDeleter}
          />
        )}
      </div>
    </div>
  );
};

export default withLike(Post);
