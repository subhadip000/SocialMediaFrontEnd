import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeactivateAccountAction,
  PopupConfirmAction,
} from "../../../redux/slices/AuthSlice";
import Popup from "../../popup/Popup";

const Deactivation = () => {
  const dispatch = useDispatch();

  const { serverErr, appErr, deactivate_acc } = useSelector(
    (state) => state.auth
  );

  const [show, setShow] = useState(true);

  const [confirm, setConfirm] = useState("");

  const [popup, setPopup] = useState(false);

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
          <p className="content">
            This is to inform you that once you deactivate your account, it will
            become inactive for 90 days before getting deleted automatically. To
            prevent the deletion of your account, you need to login again before
            the 90day mark to make your account active again.
          </p>
          <h3 className="confirmation">
          Please give your password for confirmation
          </h3>
          <p className="confirmation">Yes, deactivate my account</p>
          <label htmlFor="confirmation">
            <input
              type="password"
              name="confirmation"
              id="confirmation"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </label>
          <input
            type="button"
            value="Deactivate"
            onClick={() => {
              dispatch(DeactivateAccountAction({ password: confirm }));
              setPopup(!popup);
            }}
          />
          <Popup trigger={popup} setTrigger={setPopup} name={"See you soon again😇"}>
          <input type="button" onClick={() => dispatch(PopupConfirmAction())} value="See you👋🏻" />
          </Popup>
        </div>
      )}
    </>
  );
};

export default Deactivation;
