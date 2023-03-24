import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteAccountAction,
  PopupConfirmAction,
} from "../../../redux/slices/AuthSlice";
import Popup from "../../popup/Popup";

const DeleteAccount = () => {
  const dispatch = useDispatch();

  const [confirm, setConfirm] = useState("");

  const { serverErr, appErr, delete_acc } = useSelector((state) => state.auth);

  const [show, setShow] = useState(true);

  const [popup, setPopup] = useState(false);

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
          <p className="content">
            This is to inform you that once you delete your account, you will
            not be able to login anymore. You will not be able to recover your
            account in any way. You can deactivate if you just need a break.
          </p>
          <h3 className="confirmation">
            Please give your password for confirmation
          </h3>
          <p className="confirmation">Yes, delete my account</p>
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
            value="Delete"
            onClick={() => {
              dispatch(DeleteAccountAction({ password: confirm }));
              setPopup(!popup);
            }}
          />
          <Popup trigger={popup} setTrigger={setPopup} name={"We're sorry to see you go🥺"}>
            <input type="button" onClick={() => dispatch(PopupConfirmAction())} value="Good Bye👋🏻" />
          </Popup>
        </div>
      )}
    </>
  );
};

export default DeleteAccount;
