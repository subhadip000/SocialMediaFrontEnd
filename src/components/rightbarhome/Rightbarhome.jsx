import React from "react";

import "./Rightbarhome.css";

const Rightbarhome = () => {
  return (
    <div className="rightbarhome">
      <span className="rightbarTitle">Connect With</span>
      <div>
        <form className="rightbarUserList">
          <div className="UserDiv">
            <a href="/profile/userId">
              <img
                src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                alt=""
                className="PopupProfileImg"
              />
            </a>
            <span className="PopupUsername">username</span>
          </div>
          <button className="followBtn">Follow</button>
        </form>
      </div>
    </div>
  );
};

export default Rightbarhome;