import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

export const CreateComment = ({
  commentHandler,
  comment,
  setComment,
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
      </div>
    </>
  );
};
