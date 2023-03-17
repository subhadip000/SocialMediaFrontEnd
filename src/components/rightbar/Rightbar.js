import React from "react";
import Rightbarhome from "../rightbarhome/Rightbarhome";
import "./Rightbar.css";
import ProfileRightBar from "./../rightbarprofile/ProfileRightbar";

const Rightbar = ({ profile, post }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar post={post}/> : <Rightbarhome />}
        {/* <Rightbarhome /> */}
      </div>
    </div>
  );
};

export default Rightbar;