import React from "react";
import { FaTelegramPlane, FaEdit, FaTrash } from "react-icons/fa";

export const Comment = ({
  commentHandler,
  comment,
  setComment,
  Comments,
  loading,
  commentEditer,
  commentDeleter,
}) => {
  return (
    <>
      <hr className="footerHr" />
      <div className="postBottomFooter">
        <div className="addComment">
          <input
            type="text"
            placeholder="Add your comment..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <FaTelegramPlane className="sendIcon" onClick={commentHandler} />
        </div>
        {/* add a conditional render  */}
        {/* {loading ? (
          <p>Loading...</p>
        ) : Comments.length > 0 ? (
          Comments.map((comment) => (
            <div key={comment.id} className="commentFuncs">
              <div className="postBottomFooterItem">
                <a href="/profile/userId">
                  <img
                    src={comment.user?.profilePhoto}
                    alt=""
                    className="commentProfileImg"
                  />
                </a>
                <div>
                  <small>
                    {comment.user?.firstName} {comment.user?.lastName}
                  </small>
                  <p>{comment.description}</p>
                </div>
              </div>
              <div className="update-delete-icons">
                <FaEdit
                  className="editIcon"
                  onClick={() => commentEditer(comment.id)}
                />
                <FaTrash
                  className="deleteIcon"
                  onClick={() => commentDeleter(comment.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <h4>Be the first one to comment</h4>
        )} */}
      </div>
    </>
  );
};
