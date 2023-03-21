import React, { useState } from "react";
import "./Post.css";
import Moment from 'react-moment';
import { FaTelegramPlane } from "react-icons/fa";
import { FaHeart, FaCommentAlt, FaShareAlt } from "react-icons/fa";
import Popup from "../popup/Popup";

const Post = ({ post }) => {
  const [likePopup, setLikePopup] = useState(false);
  const [commentPopup, setCommentPopup] = useState(false);

  console.log("from post.jsx", post?.author);
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
            <span className="postUsername">{post?.author?.firstName} {post?.author?.lastName}</span>
            <span className="postDate">
              <Moment fromNow ago>
                {post?.createdAt}
              </Moment>
            </span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img src={post?.image} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="LikeComment">
              <FaHeart className="bottomLeftIcon" />
              <span className="postLikeCounter" onClick={() => { setLikePopup(true) }}>{post?.likes} Likes</span>
              <Popup trigger={likePopup} setTrigger={setLikePopup} name={"Likes"}>
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
            <div className="LikeComment">
              <FaCommentAlt className="bottomLeftIcon" />
              <span className="postLikeCounter" onClick={() => { setCommentPopup(true) }}>Comments</span>
              <Popup trigger={commentPopup} setTrigger={setCommentPopup} name={"Comments"}>
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
        </div>
        <div className="addComment">
          <input type="text" placeholder="Add your comment..." />
          <FaTelegramPlane className="sendIcon" />
        </div>

      </div>
    </div>
  );
};

export default Post;
