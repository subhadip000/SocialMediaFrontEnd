import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./EditProfile.css";
import { useDispatch, useSelector } from 'react-redux';
import { editProfileAction, editProfilePhotoAction, MyProfileAction } from '../../redux/slices/UserSlice';
import * as Yup from "yup";
import { useFormik } from 'formik';


//Form schema
const formSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required").email(),
    bio: Yup.string().required("Bio is required")
});

const EditProfile = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(MyProfileAction());
    }, [dispatch]);

    const myInfo = useSelector((state) => state.user?.myInfo);

    const [selectedFile, setSelectedFile] = useState(null);

    const [url, setUrl] = useState("");

    function handleFileSelect(event) {
        setSelectedFile(event.target.files[0]);
        setUrl(URL.createObjectURL(event.target.files[0]))
    }

    //formik
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: myInfo?.firstName,
            lastName: myInfo?.lastName,
            email: myInfo?.email,
            bio: myInfo?.bio,
        },
        onSubmit: (values) => {
            //dispath the action
            dispatch(editProfileAction(values));
            console.log(values);
        },
        validationSchema: formSchema,
    });

    return (
        <div className="editProfile">
            <Navbar />
            <div className="editProfileWrapper">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <div className="profilePhoto">
                                <form>
                                    <label htmlFor="file">
                                        Image: <MdOutlineDriveFolderUpload className="icon" />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        style={{ display: "none" }}
                                        accept="image/*"
                                        onChange={handleFileSelect}
                                        name="image"
                                    />
                                    <div>
                                        {url ? (
                                            <img src={url} alt="" className="profileUserImg" />
                                        ) : <img src={myInfo?.profilePhoto} alt="" className="profileUserImg" />}
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="updateButton"
                                            onClick={(e) => { e.preventDefault(); dispatch(editProfilePhotoAction(selectedFile)) }}>
                                            Update Photo
                                        </button>
                                    </div>

                                </form>
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">{myInfo?.firstName} {myInfo?.lastName}</h4>
                                <span className="profileInfoDesc">{myInfo?.bio}</span>
                                <div className="followInfo">
                                    <span className="followInfoDesc"><b>{myInfo?.Post?.length}</b> Posts</span>
                                    <span className="followInfoDesc"><b>{myInfo?.followers?.length}</b> Followers</span>
                                    <span className="followInfoDesc"><b>{myInfo?.following?.length}</b> Following</span>
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
                            <div className="right">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="formInput">
                                        <label>First Name</label>
                                        <input type="text" value={formik.values.firstName}
                                            onChange={formik.handleChange("firstName")}
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Last Name</label>
                                        <input type="text" value={formik.values.lastName}
                                            onChange={formik.handleChange("lastName")}
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Email</label>
                                        <input type="email" value={formik.values.email}
                                            onChange={formik.handleChange("email")}
                                            disabled
                                        />
                                    </div>
                                    <div className="formInput">
                                        <label>Bio</label>
                                        <input type="text" value={formik.values.bio}
                                            onChange={formik.handleChange("bio")}
                                        />
                                    </div>
                                    {/* <div className="formInput">
                                        <label>Relationship</label>
                                        <input type="text" placeholder="single" />
                                    </div> */}
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