import React, { useEffect } from "react";
import { MdFeed, MdLogout, MdOutlineSettings } from "react-icons/md";
import { BsChatFill } from "react-icons/bs";
import { FaUserFriends, FaVideo } from "react-icons/fa";
import "./Sidebar.css";
import MenuLink from "../menuLink/MenuLink";
import { useDispatch, useSelector } from "react-redux";
import { UserLogoutAction } from "../../redux/slices/AuthSlice";
import { Navigate } from "react-router";
import { MyProfileAction } from "../../redux/slices/UserSlice";

const Sidebar = ({ showSidebar }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(UserLogoutAction());
    return <Navigate to={"/login"} />;
  };

  useEffect(() => {
    dispatch(MyProfileAction());
  }, [dispatch]);

  const myInfo = useSelector((state) => state.user?.myInfo);

  return (
    <>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="sidebarWrapper">
          <div className="sidebarHeader">
            <div className="sideProfileCover">
              <img
                src={myInfo?.profilePhoto}
                alt=""
                className="sideProfileUserImg"
              />
              <div className="sideProfileInfo">
                <a href="/profile" className="sideProfileInfoName">
                  {myInfo?.firstName} {myInfo?.lastName}
                </a>
              </div>
              <div className="sideFollowInfo">
                <span className="sideFollowInfoDesc">
                  <b>Posts</b>
                  <span style={{ color: "gray" }}>10</span>
                </span>
                <span className="sideFollowInfoDesc">
                  <b>Followers</b>
                  <span style={{ color: "gray" }}>10</span>
                </span>
                <span className="sideFollowInfoDesc">
                  <b>Following</b>
                  <span style={{ color: "gray" }}>10</span>
                </span>
              </div>
            </div>
          </div>
          <div className="sidebarElements">
            <a href="#" className="feed">
              <MenuLink Icon={<MdFeed />} text="Feed" />
            </a>
            <a href="#" className="chats">
              <MenuLink Icon={<BsChatFill />} text="Chats" />
            </a>
            <a href="#" className="videos">
              <MenuLink Icon={<FaVideo />} text="Videos" />
            </a>
            <a href="#" className="friends">
              <MenuLink Icon={<FaUserFriends />} text="Friends" />
            </a>
            <a href="/settings" className="settings">
              <MenuLink Icon={<MdOutlineSettings />} text="Settings" />
            </a>
          </div>

          <button
            type="button"
            className="sidebarButton"
            onClick={handleLogout}
          >
            <MdLogout />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
