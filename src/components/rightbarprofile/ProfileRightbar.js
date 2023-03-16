import React from "react";
// import { Link } from "react-router-dom";
import "./ProfileRightbar.css";

const ProfileRightbar = () => {
    return (
        <div className="profileRightBar">
            <div className="profileRightBarHeading">
                <span className="profileRightBarTitle"> User Information</span>
                <a href="/" style={{ textDecoration: "none" }}>
                    <span className="editButton">Edit Profile</span>
                </a>
            </div>

            <div className="profileRightBarInfo">
                <div className="profileRightBarInfoItem">
                    <span className="profileRightBarInfoKey">Address: </span>
                    <span className="profileRightBarInfoValue">
                        Melwood Str. 72 Liverpool
                    </span>
                </div>
                <div className="profileRightBarInfoItem">
                    <span className="profileRightBarInfoKey">Country: </span>
                    <span className="profileRightBarInfoValue">United Kingdom</span>
                </div>
                <div className="profileRightBarInfoItem">
                    <span className="profileRightBarInfoKey">Relationship: </span>
                    <span className="profileRightBarInfoValue">Single</span>
                </div>
            </div>

            <h4 className="profileRightBarTitle">Close Friends</h4>
            <div className="profileRightBarFollowings">
                <div className="profileRightBarFollowing">
                    <img
                        src="https://www.happierhuman.com/wp-content/uploads/2022/07/glass-half-full-type-persons-lessons-learned.jpg"
                        alt=""
                        className="profileRightBarFollowingImg"
                    />
                    <span className="profileRightBarFollowingName">Janet</span>
                </div>
                <div className="profileRightBarFollowing">
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt=""
                        className="profileRightBarFollowingImg"
                    />
                    <span className="profileRightBarFollowingName">Isabella</span>
                </div>
                <div className="profileRightBarFollowing">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg"
                        alt=""
                        className="profileRightBarFollowingImg"
                    />
                    <span className="profileRightBarFollowingName">Beverly</span>
                </div>
                <div className="profileRightBarFollowing">
                    <img
                        src="https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"
                        alt=""
                        className="profileRightBarFollowingImg"
                    />
                    <span className="profileRightBarFollowingName">Glenna</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileRightbar;