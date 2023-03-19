import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./EditProfile.css";
import { useDispatch, useSelector } from 'react-redux';
import { MyProfileAction } from '../../redux/slices/UserSlice';

const EditProfile = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(MyProfileAction());
    }, [dispatch]);

    const myInfo = useSelector((state) => state.user?.myInfo);

    const [selectedFile, setSelectedFile] = useState(null);

    function handleFileSelect(event) {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    }
    // console.log(selectedFile);
    return (
        <div className="editProfile">
            <Navbar />
            <div className="editProfileWrapper">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src={myInfo?.profilePhoto}
                                alt=""
                                className="profileUserImg"
                            />
                            <div className="profileInfo">
                                <h4 className="profileInfoName">{myInfo?.firstName} {myInfo?.lastName}</h4>
                                <span className="profileInfoDesc">{myInfo?.bio}</span>
                                <div className="followInfo">
                                    <span className="followInfoDesc"><b>10</b> Posts</span>
                                    <span className="followInfoDesc"><b>10</b> Followers</span>
                                    <span className="followInfoDesc"><b>10</b> Following</span>
                                </div>
                                <div className="userStatus">
                                    <span className="userStatusDesc">Relationship: Single</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="editprofileRightBottom">
                        <div className="top">
                            <h1>Edit User Profile</h1>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                {selectedFile && (
                                    <img src={selectedFile} alt="" />
                                )}

                            </div>
                            <div className="right">
                                <form>
                                    <div className="formInput">
                                        <label htmlFor="file">
                                            Image: <MdOutlineDriveFolderUpload className="icon" />
                                        </label>
                                        <input type="file" id="file" style={{ display: "none" }} accept="image/*" onChange={handleFileSelect} />
                                    </div>
                                    <div className="formInput">
                                        <label>First Name</label>
                                        <input type="text" placeholder={myInfo?.firstName} />
                                    </div>
                                    <div className="formInput">
                                        <label>Last Name</label>
                                        <input type="text" placeholder={myInfo?.lastName} />
                                    </div>
                                    <div className="formInput">
                                        <label>Email</label>
                                        <input type="email" placeholder={myInfo?.email} />
                                    </div>
                                    <div className="formInput">
                                        <label>Bio</label>
                                        <input type="text" placeholder={myInfo?.bio} />
                                    </div>
                                    <div className="formInput">
                                        <label>Relationship</label>
                                        <input type="text" placeholder="single" />
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