import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { DeleteAccountAction } from "../../../redux/slices/AuthSlice";

const DeleteAccount = () => {
  const dispatch = useDispatch();

  const [confirm, setConfirm] = useState("");

  const { serverErr, appErr, delete_acc } = useSelector((state) => state.auth);

  const [show, setShow] = useState(true);

  if (delete_acc) return <Navigate to={"/login"} />;

  return (
    <>
      {show ? (
        <div className="deleteBtn">
          Delete Account
          <input
            type="button"
            onClick={() => setShow(!show)}
            value="Delete Your Account"
          />
        </div>
      ) : (
        <div className="password-popup">
          <h3 className="confirmation">
            Please Write the below sentence for confirmation
          </h3>
          <p className="confirmation">Delete My Account</p>
          <label htmlFor="confirmation">
            <input
              type="confirmation"
              name="confirmation"
              id="confirmation"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </label>
          <input
            type="button"
            value="Delete"
            onClick={() => dispatch(DeleteAccountAction({ password: confirm }))}
            // disabled={confirm === "Delete My Account" ? !able : able}
          />
        </div>
      )}
    </>
  );
};

export default DeleteAccount;
