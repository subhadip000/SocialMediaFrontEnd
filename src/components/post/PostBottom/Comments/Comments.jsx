import React, { useState } from "react";
import { FaCommentAlt } from "react-icons/fa";
import Popup from "../../../popup/Popup";
import { useDispatch } from "react-redux";
import {
  DeleteCommentAction,
  UpdateCommentAction,
} from "../../../../redux/slices/PostSlice";
import CommentPopup from "./CommentPopup/CommentPopup";
import { usePost } from "../../../../context/post";

export const Comments = () => {
  const dispatch = useDispatch();
  // const {}
  const {
    loading,
    comments,
    FetchComments,
    post,
    UpdateComments,
    DeleteComments,
  } = usePost();
  const [commentPopup, setCommentPopup] = useState(false);

  const commentEditor = (commentId, description) => {
    UpdateComments({ commentId, description });
  };

  const commentDeleter = (commentId) => {
    DeleteComments({ commentId });
  };

  return (
    <div className="LikeComment">
      <FaCommentAlt className="bottomLeftIcon" />
      <span
        className="postLikeCounter"
        onClick={() => {
          FetchComments(post?.id);
          setCommentPopup((prev) => !prev);
        }}
      >
        {post?.Comments?.length} Comments
      </span>
      <Popup
        trigger={commentPopup}
        setTrigger={setCommentPopup}
        name={"Comments"}
      >
        {loading ? (
          <p>Loading...</p>
        ) : comments?.length > 0 ? (
          comments.map((comment) => (
            <CommentPopup
              key={comment.id}
              comment={comment}
              commentDeleter={commentDeleter}
              commentEditor={commentEditor}
              setCommentPopup={setCommentPopup}
            />
          ))
        ) : (
          <h4>Be the first one to comment</h4>
        )}
      </Popup>
    </div>
  );
};
