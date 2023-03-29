import React, { useEffect, useState } from "react";
import { BsSearch, BsFillBellFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from "react-redux";
import { MyProfileAction } from "../../redux/slices/UserSlice";
import "./Navbar.css";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MyProfileAction());
  }, [dispatch]);

  const myInfo = useSelector((state) => state.user?.myInfo);

  const [showSidebar, setShowSidebar] = useState(false);

  const handleHamburgerClick = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div className="sideNavigation">
        <div className="navToggleSidebar">
          <Sidebar showSidebar={showSidebar} />
        </div>
      </div>
      <div className="navbarContainer">
        <div className="navbarLeft">
          <div style={{ textDecoration: "none" }}>
            <span className="hamburger"><GiHamburgerMenu onClick={handleHamburgerClick} /></span>
            <span className="logo">OurApp</span>
          </div>
        </div>
        <div className="navbarCenter">
          <div className="searchBar">
            <BsSearch className="searchIcon" />
            <input
              type="text"
              placeholder="Search for friends post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarIcons">
            <div className="navbarIconItem">
              <BsFillBellFill />
              <span className="navbarIconBadge">8</span>
            </div>
          </div>
          <a href="/profile">
            <img
              src={myInfo?.profilePhoto}
              alt=""
              className="navbarImg"
            />
          </a>
        </div>
      </div>


    </>

  );
};

export default Navbar;