import React from "react";
import "./ProfileRightbar.css";

const ProfileRightbar = ({ post }) => {
    // console.log("Post", post);
    return (
        <div className="profileRightBar">
            <div className="profileRightBarHeading">
                <span className="profileRightBarTitle">Photos</span>
            </div>
            <div className="profileRightBarPhotos">
                {post ? post.map((e) => {
                    return <div className="profileRightBarPhoto" key={e}>
                        {e?.image?.map(image =>
                            <img
                                src={image}
                                alt=""
                                className="profileRightBarPhotoImg"
                            />
                        )}


                    </div>
                }) : null}
            </div>
        </div>
    );
};

export default ProfileRightbar;