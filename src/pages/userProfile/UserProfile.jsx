import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./UserProfile.css";
import Feed from "../../components/feed/Feed";
// import ProfileRightbar from "../../components/rightbarprofile/ProfileRightbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFolloweingAction,
  fetchFollowersAction,
  fetchUserDetailsAction,
  MyProfileAction,
  userFollowAction,
} from "../../redux/slices/UserSlice";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Popup from "../../components/popup/Popup";
import { FetchUserPostsAction } from "../../redux/slices/PostSlice";

const UserProfile = () => {
  // dispatch
  const dispatch = useDispatch();
  // get id
  const { id } = useParams();
  const user = useSelector((state) => state?.user);
  const { profile, myInfo } = user;
  // getting user details
  useEffect(() => {
    dispatch(MyProfileAction());
    dispatch(FetchUserPostsAction(id))
    dispatch(fetchUserDetailsAction(id));
    dispatch(fetchFolloweingAction(id));
    dispatch(fetchFollowersAction(id));
  }, [id, dispatch]);
  // console.log("profile: ",profile);
  let isFollowed = (profile) => profile?.followers.includes(myInfo?.id);

  const [followersPopup, setFollowersPopup] = useState(false);
  const [followingPopup, setFollowingPopup] = useState(false);

  const followingInfo = useSelector((state) => state.user?.followingList);
  const followerInfo = useSelector((state) => state.user?.followerList);
  const userPosts = useSelector((state) => state.post?.userPosts)

  return (
    <div className="profile">
      <Navbar />
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={profile?.profilePhoto}
                alt=""
                className="profileUserImg"
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">
                  {profile?.firstName} {profile?.lastName}
                </h4>
                <span className="profileInfoDesc">{profile?.bio}</span>
                <div className="followInfo">
                  <span className="followInfoDesc">
                    <b>{profile?.Post?.length}</b> Posts
                  </span>
                  <span
                    className="followInfoDesc"
                    onClick={() => {
                      setFollowersPopup(true);
                    }}
                  >
                    <b>{profile?.followers?.length}</b> Followers
                  </span>

                  <Popup
                    trigger={followersPopup}
                    setTrigger={setFollowersPopup}
                    name={"Followers"}
                  >
                    {Array.isArray(followerInfo) ? (
                      followerInfo?.map((user) => (
                        <div key={user?.id} className="PopupDiv">
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
                      <h2> {followerInfo} </h2>
                    )}
                  </Popup>

                  <span
                    className="followInfoDesc"
                    onClick={() => {
                      setFollowingPopup(true);
                    }}
                  >
                    <b>{profile?.following?.length}</b> Following
                  </span>
                  <Popup
                    trigger={followingPopup}
                    setTrigger={setFollowingPopup}
                    name={"Following"}
                  >
                    {Array.isArray(followingInfo) ? (
                      followingInfo?.map((user) => (
                        <div key={user?.id} className="PopupDiv">
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
                {/* <Link to={`/`}>
                  <button className="editProfileBtn">Follow</button>
                </Link> */}
                {isFollowed(profile) ? (
                  <button
                    className="followBtn"
                    onClick={() => dispatch(userFollowAction(profile?.id))}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className="followBtn"
                    onClick={() => dispatch(userFollowAction(profile?.id))}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            {profile ? (
              <Feed
                // post={profile?.Post}
                post={userPosts}
                isStory={false}
                profileInfo={profile}
              />
            ) : null}
            <Rightbar profile post={profile?.Post} />
            {/* <ProfileRightbar/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
