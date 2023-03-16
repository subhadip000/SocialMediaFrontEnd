import React from "react";
import { MdFeed, MdLogout, MdOutlineSettings } from 'react-icons/md';
import { BsChatFill } from 'react-icons/bs';
import { FaUserFriends, FaVideo } from 'react-icons/fa';
import "./Sidebar.css";
import MenuLink from "../menuLink/MenuLink";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <MenuLink Icon={<MdFeed />} text="Feed" />
        <MenuLink Icon={<BsChatFill />} text="Chats" />
        <MenuLink Icon={<FaVideo />} text="Videos" />
        <MenuLink Icon={<FaUserFriends />} text="Friends" />
        <MenuLink Icon={<MdOutlineSettings />} text="Settings" />

        <button className="sidebarButton">Show More</button>
        
        <div className="sidebar-bottom">
        <hr className="sidebarHr" />
        <MenuLink Icon={<MdLogout />} text="Logout" />
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;