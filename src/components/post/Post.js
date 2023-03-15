import React from "react";
import "./Post.css";
// import { IconButton } from "@mui/material";
// import {
//     MoreVert
// } from "@mui/icons-material";
import { AiFillHeart } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";

const Post = ({ post }) => {
  console.log(post);
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
            <span className="postUsername">username</span>
            <span className="postDate">post date</span>
          </div>
          {/* <div className="postTopRight">
                        <IconButton>
                            <MoreVert className="postVertButton" />
                        </IconButton>
                    </div> */}
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img src={post?.image} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <AiFillHeart className="bottomLeftIcon" style={{ color: "red" }} />
            <span className="postLikeCounter">{post?.likes}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              comments count · share count
            </span>
          </div>
        </div>

        <hr className="footerHr" />
        <div className="postBottomFooter">
          <div className="postBottomFooterItem">
            <AiFillHeart className="footerIcon" />
            <span className="footerText">Like</span>
          </div>
          <div className="postBottomFooterItem">
            <FaComment className="footerIcon" />
            <span className="footerText">Comment</span>
          </div>
          <div className="postBottomFooterItem">
            <FaShare className="footerIcon" />
            <span className="footerText">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
