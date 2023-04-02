import React from "react";
import { FaTelegramPlane, FaEdit, FaTrash } from "react-icons/fa";

export const Comment = ({
  commentHandler,
  comment,
  setComment,
  Comments,
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
        {Comments.length > 0 &&
          Comments.map((comment) => (
            <div key={comment.id} className="commentFuncs">
              <div className="postBottomFooterItem">
                <a href="/profile/userId">
                  <img
                    src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                    alt=""
                    className="commentProfileImg"
                  />
                </a>
                {/* <p>nice picture</p> */}
                <p>{comment.description}</p>
              </div>
              <div className="update-delete-icons">
                <FaEdit className="editIcon" onClick={commentEditer} />
                <FaTrash className="deleteIcon" onClick={commentDeleter} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
