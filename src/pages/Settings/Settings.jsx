import React from "react";

const Settings = () => {
  return (
    <>
      <div className="options">
        <button>Notifications</button>
        <button>Privacy</button>
        <button>About</button>
        <button>Themes</button>
        <button>
          <a href="settings/account">Account</a>
        </button>
      </div>
    </>
  );
};

export default Settings;
