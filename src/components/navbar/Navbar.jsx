import React, { useEffect, useState } from "react";
import { BsSearch, BsFillBellFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from "react-redux";
import { MyProfileAction } from "../../redux/slices/UserSlice";
import "./Navbar.css";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MyProfileAction());
  }, [dispatch]);

  const user = useSelector((state) => state?.user);
  const { userList, myInfo } = user;

  const [showSidebar, setShowSidebar] = useState(false);

  const handleHamburgerClick = () => {
    setShowSidebar(!showSidebar);
  };

  const [showSerchbox, setShowSerchbox] = useState(false);

  function handleClick() {
    setShowSerchbox(!showSerchbox);
  }

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = userList?.filter(item =>{
      const fullName = `${item.firstName} ${item.lastName}`;
      return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    }
  );

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
          <div className="searchBar" onClick={handleClick}>
            <BsSearch className="searchIcon" />
            <input
              type="text"
              placeholder="Search for friends post or video"
              className="searchInput"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
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

      {showSerchbox && <div className="searchList">
        {searchQuery !== '' && filteredData.length > 0 ? (
          filteredData.map(item =>
            <Link to={`/user/${item?.id}`} className="searchItem" key={item.id}>
              <img
                src={item.profilePhoto}
                alt=""
                className="searchItemImg"
              />
              <span className="searchItemName">{item.firstName} {item.lastName}</span>
            </Link>))
          : (
            <div>No results found</div>
          )
        }
      </div>}

    </>

  );
};

export default Navbar;