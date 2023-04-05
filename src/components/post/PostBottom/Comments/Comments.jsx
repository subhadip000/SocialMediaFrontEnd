import React, { useState } from "react";
import { FaCommentAlt } from "react-icons/fa";
import Popup from "../../../popup/Popup";
import { useDispatch } from "react-redux";
import { DeleteCommentAction, FetchPostCommentsAction, UpdateCommentAction } from "../../../../redux/slices/PostSlice";
import CommentPopup from "./CommentPopup/CommentPopup";

export const Comments = ({ post, Post }) => {
  const dispatch = useDispatch();

  const [commentPopup, setCommentPopup] = useState(false);

  const commentEditor = (commentId, description) => {
    dispatch(UpdateCommentAction({ commentId, description }));
  };

  const commentDeleter = (commentId) => {
    dispatch(DeleteCommentAction({ commentId }));
  };

  return (
    <div className="LikeComment">
      <FaCommentAlt className="bottomLeftIcon" />
      <span
        className="postLikeCounter"
        onClick={() => {
          dispatch(FetchPostCommentsAction(post?.id));
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
        {Post?.loading ? (
          <p>Loading...</p>
        ) : Post?.Comments?.length > 0 ? (
          Post?.Comments.map((comment) => (
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
