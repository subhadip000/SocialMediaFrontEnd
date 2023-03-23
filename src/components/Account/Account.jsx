import React from "react";
import './Account.css'
import Deactivation from "./Deactivation/Deactivation";
import DeleteAccount from "./Deletion/DeleteAccount";

const Account = () => {
  return (
    <>
      <div className="options">
        <div className="delete">
          <DeleteAccount />
        </div>
        <div className="deactivation">
          <Deactivation />
        </div>
      </div>
    </>
  );
};

export default Account;
