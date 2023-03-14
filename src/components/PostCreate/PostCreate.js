// import {
//     EmojiEmotions,
//     PermMedia,
//     VideoCameraFront,
// } from "@mui/icons-material";
import { MdClose } from 'react-icons/md';
import { FcStackOfPhotos } from 'react-icons/fc';
import { FaShare } from 'react-icons/fa';
import React, { useState } from "react";
import "./PostCreate.css";

const PostCreate = () => {
    const [file, setFile] = useState(null);

    const removeImage = () => {
        setFile(null);
    };
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                        alt=""
                        className="shareProfileImg"
                    />
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="shareInput"
                    />
                    <div className="shareBottom">
                        <div className="shareOptions">
                            <label htmlFor="file" className="shareOption">
                                <FcStackOfPhotos className="shareIcon" style={{ color: "#2e0196f1" }} />
                                <span className="shareOptionText">Photo</span>
                                <input
                                    type="file"
                                    id="file"
                                    accept=".png,.jpeg,.jpg"
                                    style={{ display: "none" }}
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </label>
                        </div>
                        <div className="shareOptions">
                            <button className='shareBtn'><FaShare/></button>
                        </div>
                    </div>
                </div>

                <hr className="shareHr" />
                {file && (
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                        <MdClose className="shareCancelImg" onClick={removeImage} />
                    </div>
                )}

            </div>
        </div>
    );
};

export default PostCreate;