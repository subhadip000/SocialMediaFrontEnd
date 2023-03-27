import React from "react";
import './Account.css'
import Deactivation from "./Deactivation/Deactivation";
import DeleteAccount from "./Deletion/DeleteAccount";
import UpdatePassword from "./UpdatePassword/UpdatePassword";

const Account = () => {

  const styleHead = {
    border: "1px solid black",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "5px",
    width: "300px",
    marginBottom: "5px",
  };

  return (
    <>
      <div className="options">
        <div className="delete">
          <DeleteAccount styleHead={styleHead}/>
        </div>
        <div className="deactivation">
          <Deactivation styleHead={styleHead}/>
        </div>
        <div className="update-password">
          <UpdatePassword styleHead={styleHead}/>
        </div>
      </div>
    </>
  );
};

export default Account;
