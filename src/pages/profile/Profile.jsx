import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";
import Feed from "../../components/feed/Feed";
// import ProfileRightbar from "../../components/rightbarprofile/ProfileRightbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchFolloweingAction, fetchFollowersAction, MyProfileAction } from "../../redux/slices/UserSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "../../components/popup/Popup";
import { FetchPostAction } from "../../redux/slices/PostSlice";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MyProfileAction());
    // dispatch(fetchFolloweingAction());
    // dispatch(fetchFollowersAction());
    // dispatch(FetchPostAction());
  }, [dispatch]);

  const [followersPopup, setFollowersPopup] = useState(false);
  const [followingPopup, setFollowingPopup] = useState(false);

  const myInfo = useSelector((state) => state.user?.myInfo);
  const followingInfo = useSelector((state) => state.user?.followingList);
  const followerInfo = useSelector((state) => state.user?.followerList);
  // const post = useSelector((state) => state.post?.Post);
  // console.log("post", post);
  // console.log("myinfo post", myInfo?.Post);

  // const MyInfoPost = myInfo?.Post;

  // let myPost = [];


  // for (let i = 0; i < post.length; i++) {
  //   for (let j = 0; j < MyInfoPost.length; j++) {
  //     if (post[i].id === MyInfoPost[j].id) {
  //       myPost.push(post[i].value);
  //     }
  //   }
  // }

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
                  <span className="followInfoDesc">
                    <b>{myInfo?.Post?.length}</b> Posts
                  </span>
                  <span className="followInfoDesc" onClick={() => { setFollowersPopup(true) }}>
                    <b>{myInfo?.followers?.length}</b> Followers
                  </span>

                  <Popup
                    trigger={followersPopup}
                    setTrigger={setFollowersPopup}
                    name={"Followers"}
                  >
                    {followerInfo?.map((user) =>
                      <div className="PopupDiv">
                        <Link to={`/user/${user?.id}`} className="Link">
                          <img
                            src={user.profilePhoto}
                            alt=""
                            className="PopupProfileImg"
                          />
                          <span className="PopupUsername">{user.firstName} {user.lastName}</span>
                        </Link>
                      </div>
                    )}
                  </Popup>

                  <span className="followInfoDesc" onClick={() => { setFollowingPopup(true) }}>
                    <b>{myInfo?.following?.length}</b> Following
                  </span>
                  <Popup
                    trigger={followingPopup}
                    setTrigger={setFollowingPopup}
                    name={"Following"}
                  >
                    {followingInfo?.map((user) =>
                      <div className="PopupDiv">
                        <Link to={`/user/${user?.id}`} className="Link">
                          <img
                            src={user.profilePhoto}
                            alt=""
                            className="PopupProfileImg"
                          />
                          <span className="PopupUsername">{user.firstName} {user.lastName}</span>
                        </Link>
                      </div>
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
            {myInfo ? <Feed post={myInfo?.Post} isStory={false} profileInfo={myInfo}/> : null}
            <Rightbar profile post={myInfo?.Post} />
            {/* <ProfileRightbar/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
