import React, { useState } from "react";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { CreateCommentAction } from "../../redux/slices/PostSlice";
import { PostContent } from "./PostContent/PostContent";
import { PostBottom } from "./PostBottom/PostBottom";
import { PostTop } from "./PostTop/PostTop";
import { CreateComment } from "./CreateComment/CreateComment";
// import useProvidePost from "../../hooks/useProvidePost";

const Post = ({ post, profileInfo }) => {
  const dispatch = useDispatch();
  // const { fetchSinglePost, post: SinglePost } = useProvidePost();

  const user = useSelector((state) => state?.user);
  const { myInfo } = user;

  const [comment, setComment] = useState("");

  const commentHandler = () => {
    setComment("");
    dispatch(CreateCommentAction({ postId: post?.id, description: comment }));
  };
  // useEffect(() => {
  //   fetchSinglePost(post?.id);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="post">
      <div className="postWrapper">
        <PostTop
          profileInfo={profileInfo}
          post={post}
          myInfo={myInfo}
          setIsEdit={setIsEdit}
        />

        <PostContent post={post} isEdit={isEdit} setIsEdit={setIsEdit} />

        <PostBottom post={post} myInfo={myInfo} />

        <CreateComment
          commentHandler={commentHandler}
          comment={comment}
          setComment={setComment}
        />
      </div>
    </div>
  );
};

export default Post;
