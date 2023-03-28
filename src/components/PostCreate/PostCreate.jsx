import { MdClose } from 'react-icons/md';
import { FcStackOfPhotos } from 'react-icons/fc';
import { FaShare } from 'react-icons/fa';
import React, { useState } from "react";
import * as Yup from "yup";
import "./PostCreate.css";
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../redux/slices/PostSlice';
import { useFormik } from 'formik';


//from schema
const FormSchema = Yup.object({
    // caption: Yup.string().required("Title is required"),
    // image: Yup.array().required("Image is required"),
    caption: Yup.string(),
    image: Yup.array()
});

const PostCreate = () => {
    //dispatch
    const dispatch = useDispatch();

    const [selectedImages, setSelectedImages] = useState([]);

    const [images, setImages] = useState([]);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        setImages(selectedFiles)
        const selectedFilesArray = Array.from(selectedFiles);
        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        setSelectedImages(imagesArray);
        
    };

    function deleteHandler(image) {
        const index = selectedImages.find((e) => e === image)
        console.log(images);
        const newArray = Array.from(images);
        newArray.splice(index, 1); 
        setImages(newArray)
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }

    //formik
    const formik = useFormik({
        initialValues: {
            caption: "",
            image: [],
        },
        
        onSubmit: (values) => {
            // dispath the action
            const data = {
                caption: values?.caption,
                image: images
            };

            dispatch(createPostAction(data));
            console.log(data);
        },
        validationSchema: FormSchema,
    });

    return (
        <div className="share">
            <div className="shareWrapper">
                <form onSubmit={formik.handleSubmit} className="shareWrapperForm">
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
                            value={formik.values.caption}
                            onChange={formik.handleChange("caption")}
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
                                    // value={formik.values.image}
                                    />
                                </label>
                            </div>
                            <div className="shareOptions">
                                <button className='shareBtn' type='submit'><FaShare /></button>
                            </div>
                        </div>
                    </div>
                </form>
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
