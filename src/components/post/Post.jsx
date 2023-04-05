import React, { useEffect, useState } from "react";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { CreateCommentAction } from "../../redux/slices/PostSlice";
import withLike from "../HOC/likeHoc";
import { PostContent } from "./PostContent/PostContent";
import { PostBottom } from "./PostBottom/PostBottom";
import { PostTop } from "./PostTop/PostTop";
import { CreateComment } from "./CreateComment/CreateComment";

const Post = ({
  post,
  profileInfo,
  setIsLiked,
  setLikeCount,
  likeCount,
  isLike,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const Post = useSelector((state) => state?.post);
  const { myInfo } = user;
  const { like } = Post;

  useEffect(() => {
    setLikeCount(like?.likes || post?.likes);
    const isIt = post?.likedBy?.find(
      (e) => e.toString() === myInfo?.id.toString()
    );
    if (isIt) {
      setIsLiked(true);
    }
  }, []);

  const [comment, setComment] = useState("");

  const commentHandler = () => {
    setComment("");
    dispatch(CreateCommentAction({ postId: post?.id, description: comment }));
  };

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="post">
      <div className="postWrapper">
        <PostTop profileInfo={profileInfo} post={post} myInfo={myInfo} setIsEdit={setIsEdit} />

        <PostContent post={post} isEdit={isEdit} setIsEdit={setIsEdit} />

        <PostBottom
          Post={Post}
          post={post}
          myInfo={myInfo}
          setIsLiked={setIsLiked}
          setLikeCount={setLikeCount}
          likeCount={likeCount}
          isLike={isLike}
        />

        <CreateComment
          commentHandler={commentHandler}
          comment={comment}
          setComment={setComment}
        />
      </div>
    </div>
  );
};

export default withLike(Post);
