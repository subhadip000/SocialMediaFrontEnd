import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { DeactivateAccountAction } from "../../../redux/slices/AuthSlice";

const Deactivation = () => {
  const dispatch = useDispatch();

  const { serverErr, appErr, isToken } = useSelector(
    (state) => state.auth
  );

  const [show, setShow] = useState(true);

  const [confirm, setConfirm] = useState("");

  if (isToken) return <Navigate to={'/login'} />

  return (
    <>
      {show ? (
        <div>
          Deactivate Account
          <input
            type="button"
            onClick={() => setShow(!show)}
            value="Deactivate Your Account"
          />
        </div>
      ) : (
        <div className="password-popup">
          <h3 className="confirmation">
            Please Write the below sentence for confirmation
          </h3>
          <p className="confirmation">Deactivate My Account</p>
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
            value="Deactivate"
            onClick={() =>
              dispatch(DeactivateAccountAction({ password: confirm }))
            }
            // disabled={confirm === "Deactivate My Account" ? !able : able}
          />
        </div>
      )}
    </>
  );
};

export default Deactivation;
