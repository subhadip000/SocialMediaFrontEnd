import React from "react";
import { BsSearch, BsFillPersonFill, BsChatFill, BsFillBellFill } from 'react-icons/bs';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <a href="/" style={{ textDecoration: "none" }}>
          <span className="logo">OurApp</span>
        </a>
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
            <BsFillPersonFill />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <BsChatFill />
            <span className="navbarIconBadge">10</span>
          </div>
          <div className="navbarIconItem">
            <BsFillBellFill />
            <span className="navbarIconBadge">8</span>
          </div>
        </div>
        <a href="/">
          <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" className="navbarImg" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;