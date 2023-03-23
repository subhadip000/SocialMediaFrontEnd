import React from "react";
import { Link } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  return (
    <>
      <div className="options">
        <Link to={"#"}>
          <button>Notifications</button>
        </Link>

        <Link to={"#"}>
          <button>Privacy</button>
        </Link>

        <Link to={"#"}>
          <button>About</button>
        </Link>

        <Link to={"#"}>
          <button>Themes</button>
        </Link>

        <Link to={"account"}>
          <button>Account</button>
        </Link>
      </div>
    </>
  );
};

export default Settings;
