import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";
import Feed from "../../components/feed/Feed";
// import ProfileRightbar from "../../components/rightbarprofile/ProfileRightbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFolloweingAction,
  fetchFollowersAction,
  MyProfileAction,
} from "../../redux/slices/UserSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "../../components/popup/Popup";
import { FetchMyPostsAction, FetchPostAction } from "../../redux/slices/PostSlice";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(MyProfileAction());
    dispatch(FetchMyPostsAction())
    dispatch(fetchFolloweingAction());
    dispatch(fetchFollowersAction());
    // dispatch(FetchPostAction());
  }, [dispatch]);

  const [followersPopup, setFollowersPopup] = useState(false);
  const [followingPopup, setFollowingPopup] = useState(false);

  const myInfo = useSelector((state) => state.user?.myInfo);
  const followingInfo = useSelector((state) => state.user?.followingList);
  const followerInfo = useSelector((state) => state.user?.followerList);
  const myPosts = useSelector((state) => state.post?.myPosts);

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
                  <span className="followInfoDesc">
                    <b>{myInfo?.Post?.length}</b> Posts
                  </span>
                  <span
                    className="followInfoDesc"
                    onClick={() => {
                      setFollowersPopup(true);
                    }}
                  >
                    <b>{myInfo?.followers?.length}</b> Followers
                  </span>

                  <Popup
                    trigger={followersPopup}
                    setTrigger={setFollowersPopup}
                    name={"Followers"}
                  >
                    <div className="PopupDiv">
                      {Array.isArray(followerInfo) ? (
                        followerInfo?.map((user) => (
                          <Link to={`/user/${user?.id}`} className="Link">
                            <img
                              src={user.profilePhoto}
                              alt="userDp"
                              className="PopupProfileImg"
                            />
                            <span className="PopupUsername">
                              {user.firstName} {user.lastName}
                            </span>
                          </Link>
                        ))
                      ) : (
                        <h2> {followerInfo} </h2>
                      )}
                    </div>
                  </Popup>

                  <span
                    className="followInfoDesc"
                    onClick={() => {
                      setFollowingPopup(true);
                    }}
                  >
                    <b>{myInfo?.following?.length}</b> Following
                  </span>
                  <Popup
                    trigger={followingPopup}
                    setTrigger={setFollowingPopup}
                    name={"Following"}
                  >
                    {Array.isArray(followingInfo) ? (
                      followingInfo?.map((user) => (
                        <div className="PopupDiv">
                          <Link to={`/user/${user?.id}`} className="Link">
                            <img
                              src={user.profilePhoto}
                              alt=""
                              className="PopupProfileImg"
                            />
                            <span className="PopupUsername">
                              {user.firstName} {user.lastName}
                            </span>
                          </Link>
                        </div>
                      ))
                    ) : (
                      <h2> {followingInfo} </h2>
                    )}
                  </Popup>
                </div>
                <div className="userStatus">
                  <span className="userStatusDesc">Relationship: Single</span>
                </div>
              </div>
              <div className="editProfile">
                <Link to={`/editprofile`}>
                  <button className="editProfileBtn">Edit Profile</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            {myInfo ? (
              <Feed post={myPosts} isStory={false} profileInfo={myInfo} />
            ) : null}
            <Rightbar profile post={myInfo?.Post} />
            {/* <ProfileRightbar/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
