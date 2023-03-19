import React from "react";
import Storycard from "../storycard/Storycard";
import "./Stories.css";

const Stories = () => {
    return (
        <div className="stories">
            {/* <div className="storyCard">
                <div className="overlay"></div>
                <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" className="storyProfile" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgygw88q9oh0L9GC7Dnf1IWU_NYQNcpVn_xEqEYG-&s" alt="" className="storybackground" />
                <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" className="storyadd" />
                <span className="text">Amber</span>
            </div> */}

            <Storycard />
            <Storycard />
            <Storycard />
            <Storycard />
            <Storycard />

        </div>
    );
};

export default Stories;