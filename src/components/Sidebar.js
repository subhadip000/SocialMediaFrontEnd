import React from 'react';
import SidebarRow from './SidebarRow';
import './css/Sidebar.css';

import { BsPeople } from 'react-icons/bs';
import { AiFillHome, AiFillWechat } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { MdSlowMotionVideo } from 'react-icons/md';

function Sidebar() {

  return (
    <div className="sidebar">
      <SidebarRow src="https://pbs.twimg.com/profile_images/75504613/wlvrn_profile_pic_v02_400x400.jpg" title="User_Name"/>
      <SidebarRow Icon={AiFillHome} title="Home" />
      <SidebarRow Icon={BsPeople} title="Friends" />
      <SidebarRow Icon={AiFillWechat} title="Messanger" />
      <SidebarRow Icon={MdSlowMotionVideo} title="Videos" />
      <SidebarRow Icon={CgMenuGridO} title="More" />
    </div>
  );
}

export default Sidebar;