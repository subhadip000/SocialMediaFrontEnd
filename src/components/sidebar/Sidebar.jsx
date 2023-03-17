import React from "react";
import { MdFeed, MdLogout, MdOutlineSettings } from 'react-icons/md';
import { BsChatFill } from 'react-icons/bs';
import { FaUserFriends, FaVideo } from 'react-icons/fa';
import "./Sidebar.css";
import MenuLink from "../menuLink/MenuLink";
import { useDispatch } from "react-redux";
import { UserLogoutAction } from "../../redux/slices/UserSlice";

const Sidebar = () => {

  const dispatch = useDispatch()

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <MenuLink Icon={<MdFeed />} text="Feed" />
        <MenuLink Icon={<BsChatFill />} text="Chats" />
        <MenuLink Icon={<FaVideo />} text="Videos" />
        <MenuLink Icon={<FaUserFriends />} text="Friends" />
        <MenuLink Icon={<MdOutlineSettings />} text="Settings" />

        <div className="sidebar-bottom">
          <button type="button" className="sidebarButton" onClick={() => dispatch(UserLogoutAction())}><MdLogout /><span>Logout</span></button>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;