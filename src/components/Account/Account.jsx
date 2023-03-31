import React from "react";
import './Account.css'
import Deactivation from "./Deactivation/Deactivation";
import DeleteAccount from "./Deletion/DeleteAccount";
import EmailVerification from "./Email/EmailVerification";
import UpdatePassword from "./UpdatePassword/UpdatePassword";

const Account = () => {

  return (
    <>
      <div className="options">
        <div className="verify">
          <EmailVerification />
        </div>
        <div className="delete">
          <DeleteAccount />
        </div>
        <div className="deactivation">
          <Deactivation />
        </div>
        <div className="update-password">
          <UpdatePassword />
        </div>
      </div>
    </>
  );
};

export default Account;
