import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";
import Feed from "./../../components/feed/Feed";
// import ProfileRightbar from "../../components/rightbarprofile/ProfileRightbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { useDispatch, useSelector } from "react-redux";
import { MyProfileAction } from "../../redux/slices/UserSlice";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MyProfileAction());
  }, [dispatch]);

  const myInfo = useSelector((state) => state.user?.myInfo);
  // console.log(myInfo);
  return (
    <div className="profile">
      <Navbar />
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={myInfo?.profilePhoto}
                alt=""
                className="profileUserImg"
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">
                  {myInfo?.firstName} {myInfo?.lastName}
                </h4>
                <span className="profileInfoDesc">{myInfo?.bio}</span>
                <div className="followInfo">
                  <span className="followInfoDesc"><b>10</b> Posts</span>
                  <span className="followInfoDesc"><b>10</b> Followers</span>
                  <span className="followInfoDesc"><b>10</b> Following</span>
                </div>
                <div className="userStatus">
                  <span className="userStatusDesc">Relationship: Single</span>
                </div>
              </div>
              <div className="editProfile">
                <button className="editProfileBtn">Edit Profile</button>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            {myInfo ? <Feed post={myInfo?.Post} /> : null}
            <Rightbar profile />
            {/* <ProfileRightbar/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
