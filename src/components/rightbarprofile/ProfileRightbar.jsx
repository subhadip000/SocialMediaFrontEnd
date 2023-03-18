import React from "react";
import "./ProfileRightbar.css";

const ProfileRightbar = ({ post }) => {
    console.log("Post", post);
    return (
        <div className="profileRightBar">
            <div className="profileRightBarHeading">
                <span className="profileRightBarTitle">Photos</span>
            </div>
            <div className="profileRightBarPhotos">
                {post ? post.map((e, i) => {
                    return <div className="profileRightBarPhoto" key={i}>

                        <img
                            src={post[i]?.image}
                            alt=""
                            className="profileRightBarPhotoImg"
                        />

                    </div>
                }) : null}
            </div>
        </div>
    );
};

export default ProfileRightbar;