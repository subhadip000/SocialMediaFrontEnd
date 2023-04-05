import React from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CommentPopup = ({ comment, commentDeleter, commentEditor, setCommentPopup }) => {
  const user = useSelector((state) => state?.user);
  const { myInfo } = user;

  const [editComment, setEditComment] = useState(comment.description);
  const [isInput, setIsInput] = useState(false);
  return (
    <div key={comment.id} className="commentFuncs">
      <div className="PopupContent">
        <Link
          to={
            comment.user?.id === myInfo.id
              ? `/profile`
              : `/user/${comment.user?.id}`
          }
          className="Link"
        >
          <img
            src={comment.user?.profilePhoto}
            alt=""
            className="PopupProfileImg"
          />
        </Link>
        <div className="PopupDetails">
          <Link to={`/user/${comment.user?.id}`} className="Link">
            <small className="CommentUsername">
              {comment.user?.firstName} {comment.user?.lastName}
            </small>
          </Link>
          {!isInput ? (
            <p>{comment.description}</p>
          ) : (
            <div>
              <input
                type="text"
                className="CommentDesc"
                value={editComment}
                onChange={(e) => setEditComment(e.target.value)}
              />
              <input
                type="button"
                value="Update"
                onClick={() => {
                  commentEditor(comment.id, editComment)
                  setCommentPopup((prev) => (prev = false))
                }}
                disabled={comment.description === editComment}
              />
              <input
                type="button"
                value="Cancel"
                onClick={() => setIsInput((prev) => (prev = false))}
              />
            </div>
          )}
        </div>
      </div>
      {comment.user?.id === myInfo.id ? (
        <div className="update-delete-icons">
          <FaEdit
            className="editIcon"
              onClick={() =>
                setIsInput((prev) => (prev = true))
              }
          />
          <FaTrash
            className="deleteIcon"
            onClick={() => {
              commentDeleter(comment.id)
              setCommentPopup((prev) => (prev = false))
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CommentPopup;
