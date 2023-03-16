import React from "react";
import "./Post.css";
import Moment from 'react-moment';
import { FaTelegramPlane } from "react-icons/fa";
import { FaHeart, FaCommentAlt, FaShareAlt } from "react-icons/fa";

const Post = ({ post }) => {
  console.log(post?.author);
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
            <span className="postUsername">{post?.author[0]?.firstName} {post?.author[0]?.lastName}</span>
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
              <span className="postLikeCounter"><span>Like {post?.likes}</span></span>
            </div>
            <div className="LikeComment">
              <FaCommentAlt className="bottomLeftIcon" />
              <span className="postLikeCounter"><span>Comment</span></span>
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
