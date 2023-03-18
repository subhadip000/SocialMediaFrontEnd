import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./EditProfile.css";

const EditProfile = () => {
    return (
        <div className="editProfile">
            <Navbar />
            <div className="editProfileWrapper">
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
                    <div className="editprofileRightBottom">
                        <div className="top">
                            <h1>Edit User Profile</h1>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <img src="/assets/profileCover/DefaultProfile.jpg" alt="" />
                            </div>
                            <div className="right">
                                <form>
                                    <div className="formInput">
                                        <label htmlFor="file">
                                            Image: <MdOutlineDriveFolderUpload className="icon" />
                                        </label>
                                        <input type="file" id="file" style={{ display: "none" }} />
                                    </div>
                                    <div className="formInput">
                                        <label>Name</label>
                                        <input type="text" placeholder="Jane Doe" />
                                    </div>
                                    <div className="formInput">
                                        <label>Username</label>
                                        <input type="text" placeholder="jane_doe" />
                                    </div>
                                    <div className="formInput">
                                        <label>Email</label>
                                        <input type="email" placeholder="jane_doe@gmail.com" />
                                    </div>
                                    <div className="formInput">
                                        <label>Phone</label>
                                        <input type="text" placeholder="+4 123 456 789" />
                                    </div>
                                    <div className="formInput">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            placeholder="Melwood str. 71 Liverpool"
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Country</label>
                                        <input type="text" placeholder="United Kingdom" />
                                    </div>
                                    <button type="submit" className="updateButton">
                                        Update Profile
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;