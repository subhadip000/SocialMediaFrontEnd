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
        {post
          ? post.map((e) => {
              return (
                <div className="profileRightBarPhoto" key={e?.id}>
                  {e?.image?.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      className="profileRightBarPhotoImg"
                    />
                  ))}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ProfileRightbar;
