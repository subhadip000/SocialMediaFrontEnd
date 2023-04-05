import React from "react";
import { Link } from "react-router-dom";

export const LikePopup = ({ user, myInfo }) => {
  return (
    <div className="PopupDiv">
      <Link
        to={user?.id === myInfo?.id ? "/profile" : `/user/${user?.id}`}
        className="Link"
      >
        <img src={user.profilePhoto} alt="" className="PopupProfileImg" />
        <span className="PopupUsername">
          {user.firstName} {user.lastName}
        </span>
      </Link>
    </div>
  );
};
