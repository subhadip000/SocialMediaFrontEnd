import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../../../../redux/slices/PostSlice";

export const ThreeDots = ({ postId, setIsEdit }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <BsThreeDotsVertical onClick={toggleDropdown} />
      {isOpen && (
        <div className="dropdown-content">
          <span
            className="dropdown-element"
            onClick={() => {
              setIsEdit((prev) => (prev = true));
              setIsOpen((prev) => (prev = false));
            }}
          >
            Update Post
          </span>
          <span
            className="dropdown-element"
            onClick={() => dispatch(deletePostAction(postId))}
          >
            Delete Post
          </span>
        </div>
      )}
    </div>
  );
};
