import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";
import Feed from "./../../components/feed/Feed";
// import ProfileRightbar from "../../components/rightbarprofile/ProfileRightbar";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
    return (
        <div className="profile">
            <Navbar />
            <div className="profileWrapper">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
                                alt=""
                                className="profileCoverImg"
                            />
                            <img
                                src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                                alt=""
                                className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Amber Logan</h4>
                            <span className="profileInfoDesc">Hi Friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                        {/* <ProfileRightbar/> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;