import React from "react";
import './Account.css'
import Deactivation from "./Deactivation/Deactivation";
import DeleteAccount from "./Deletion/DeleteAccount";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import EmailVerification from "./Email/Verify Email/EmailVerification";
import UpdateEmail from "./Email/Update Email/UpdateEmail";

const Account = () => {

  return (
    <>
      <div className="options">
        <div className="verify">
          <EmailVerification />
        </div>
        <div className="update-email">
          <UpdateEmail />
        </div>
        <div className="update-password">
          <UpdatePassword />
        </div>
        <div className="deactivation">
          <Deactivation />
        </div>
        <div className="delete">
          <DeleteAccount />
        </div>
      </div>
    </>
  );
};

export default Account;
