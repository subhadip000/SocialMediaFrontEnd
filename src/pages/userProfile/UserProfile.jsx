import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./UserProfile.css";
import Feed from "../../components/feed/Feed";
// import ProfileRightbar from "../../components/rightbarprofile/ProfileRightbar";
import Rightbar from "../../components/rightbar/Rightbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchFolloweingAction, fetchFollowersAction, fetchUserDetailsAction, MyProfileAction } from "../../redux/slices/UserSlice";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Popup from "../../components/popup/Popup";

const UserProfile = () => {

    // dispatch
    const dispatch = useDispatch();
    // get id
    const {id} = useParams()
    const user = useSelector((state) => state?.user);
    const { profile } = user;
    // getting user details
    useEffect(()=>{
        dispatch(fetchUserDetailsAction(id))
    },[id,dispatch]);
    // console.log(profile);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(MyProfileAction());
//     dispatch(fetchFolloweingAction());
//     dispatch(fetchFollowersAction());
//   }, [dispatch]);

  const [followersPopup, setFollowersPopup] = useState(false);
  const [followingPopup, setFollowingPopup] = useState(false);

//   const myInfo = useSelector((state) => state.user?.myInfo);
//   const followingInfo = useSelector((state) => state.user?.followingList);
//   const followerInfo = useSelector((state) => state.user?.followerList);
//   console.log(followingInfo);

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
                  <span className="followInfoDesc" onClick={() => { setFollowersPopup(true) }}>
                    <b>{profile?.followers?.length}</b> Followers
                  </span>

                  <Popup
                    trigger={followersPopup}
                    setTrigger={setFollowersPopup}
                    name={"Followers"}
                  >
                    <div className="PopupDiv">
                      <a href="/profile/userId">
                        <img
                          src="https://img2.goodfon.com/wallpaper/nbig/8/42/batman-bruce-wayne-dark.jpg"
                          alt=""
                          className="PopupProfileImg"
                        />
                      </a>
                      <span className="PopupUsername">firstName lastName</span>
                    </div>
                  </Popup>

                  <span className="followInfoDesc" onClick={() => { setFollowingPopup(true) }}>
                    <b>{profile?.following?.length}</b> Following
                  </span>
                  <Popup
                    trigger={followingPopup}
                    setTrigger={setFollowingPopup}
                    name={"Following"}
                  >
                    <div className="PopupDiv">
                      <a href="/profile/userId">
                        <img
                          src="https://img2.goodfon.com/wallpaper/nbig/8/42/batman-bruce-wayne-dark.jpg"
                          alt=""
                          className="PopupProfileImg"
                        />
                      </a>
                      <span className="PopupUsername">firstName lastName</span>
                    </div>
                  </Popup>


                </div>
                <div className="userStatus">
                  <span className="userStatusDesc">Relationship: Single</span>
                </div>
              </div>
              <div className="editProfile">
                <Link to={`/`}>
                  <button className="editProfileBtn">Follow</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
          {profile ? <Feed post={profile?.Post} isStory={false} /> : null}
            <Rightbar profile post={profile?.Post} />
            {/* <ProfileRightbar/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
