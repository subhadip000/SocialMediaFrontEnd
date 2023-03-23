import { MdClose } from 'react-icons/md';
import { FcStackOfPhotos } from 'react-icons/fc';
import { FaShare } from 'react-icons/fa';
import React, { useState } from "react";
import "./PostCreate.css";

const PostCreate = () => {

    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        setSelectedImages(imagesArray);
    };

    function deleteHandler(image) {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }


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
                                    multiple
                                    id="file"
                                    accept=".png,.jpeg,.jpg"
                                    style={{ display: "none" }}
                                    onChange={onSelectFile}
                                />
                            </label>
                        </div>
                        <div className="shareOptions">
                            <button className='shareBtn'><FaShare /></button>
                        </div>
                    </div>
                </div>

                <hr className="shareHr" />
                {selectedImages &&
                    selectedImages.map((image, index) => {
                        return (
                            <div key={image} className="shareImgContainer">
                                <img src={image} alt="upload" className="shareImg" />
                                <MdClose className="shareCancelImg" onClick={() => deleteHandler(image)} />
                            </div>
                        );
                    })}

            </div>
        </div>
    );
};

export default PostCreate;