import React, { useEffect, useState } from "react";
import "./Post.css";
import Moment from "react-moment";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTelegramPlane, FaHeart, FaCommentAlt, FaShareAlt } from "react-icons/fa";
import Popup from "../popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { postLikesAction } from "../../redux/slices/PostSlice";
import withLike from "../HOC/likeHoc";
import ImageSwiper from "../Swiper/ImageSwiper";
import { Link } from "react-router-dom";


const Post = ({
  post,
  setIsLiked,
  setLikeCount,
  likeCount,
  isLike, }) => {
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

  // console.log("from post.jsx", post.LikedBy);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <a href="/profile/userId">
              <img
                src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                alt=""
                className="postProfileImg"
              />
            </a>
            <span className="postUsername">
              {post?.author?.firstName} {post?.author?.lastName}
            </span>
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
            <img src={post?.image} alt="" className="postImg" />
          ) : (
            <div className="sliderContainer">
              <ImageSwiper images={post?.image} />
            </div>
          )}
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="LikeComment">
              <FaHeart className="bottomLeftIcon" onClick={() => LikeHandler()} color={isLike ? "#fc0341" : ""} />
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
                {post?.LikedBy?.map((user) =>
                  <div className="PopupDiv">
                    {user?.id === myInfo?.id ?
                      <Link to={"/profile"}>
                        <img
                          src={user.profilePhoto}
                          alt=""
                          className="PopupProfileImg"
                        />
                      </Link>
                      : <Link to={`/user/${user?.id}`}>
                        <img
                          src={user.profilePhoto}
                          alt=""
                          className="PopupProfileImg"
                        />
                      </Link>
                    }

                    <span className="PopupUsername">{user.firstName} {user.lastName}</span>
                  </div>
                )}
              </Popup>
            </div>
            <div className="LikeComment">
              <FaCommentAlt className="bottomLeftIcon" />
              <span
                className="postLikeCounter"
                onClick={() => {
                  setCommentPopup(true);
                }}
              >
                Comments
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

        <hr className="footerHr" />
        <div className="postBottomFooter">
          <div className="postBottomFooterItem">
            <a href="/profile/userId">
              <img
                src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                alt=""
                className="commentProfileImg"
              />
            </a>
            <p>nice picture</p>
          </div>
          <div className="addComment">
            <input type="text" placeholder="Add your comment..." />
            <FaTelegramPlane className="sendIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLike(Post);
