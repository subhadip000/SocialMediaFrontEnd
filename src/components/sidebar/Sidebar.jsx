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
import { Link } from "react-router-dom";

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
console.log("sidebar",myInfo);
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
                <Link to={"/profile"} className="sideProfileInfoName">
                  {myInfo?.firstName} {myInfo?.lastName}
                </Link>
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
            <Link to={"/"}>
              <MenuLink Icon={<MdFeed />} text="Feed" />
            </Link>

            <Link to={"#"}>
              <MenuLink Icon={<BsChatFill />} text="Chats" />
            </Link>

            <Link to={"#"}>
              <MenuLink Icon={<FaVideo />} text="Videos" />
            </Link>

            <Link to={"#"}>
              <MenuLink Icon={<FaUserFriends />} text="Friends" />
            </Link>

            <Link to={"/settings"}>
              <MenuLink Icon={<MdOutlineSettings />} text="Settings" />
            </Link>
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
