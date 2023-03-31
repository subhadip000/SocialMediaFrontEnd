import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteAccountAction,
  PopupConfirmAction,
} from "../../../redux/slices/AuthSlice";
import Popup from "../../popup/Popup";
import ShowButton from "../ShowButton/ShowButton";

const DeleteAccount = () => {
  const dispatch = useDispatch();

  const [confirm, setConfirm] = useState("");

  const { serverErr, appErr, delete_acc } = useSelector((state) => state.auth);

  const [show, setShow] = useState(true);

  const [popup, setPopup] = useState(false);

  return (
    <>
      {show ? (
        <ShowButton show={show} setShow={setShow} Value="Delete Account" />
      ) : (
        <div className="password-popup">
          <h2 style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>Deletion</h2>
          <strong className="error">
            {serverErr === "Network Error" ? serverErr : null}
          </strong>
          <strong className="error">{appErr ? appErr : null}</strong>
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
          <Popup
            trigger={popup}
            setTrigger={setPopup}
            name={""}
            isRequired={"No"}
          >
            <h1>{delete_acc ? "We're sorry to see you go🥺" : "Try Again"}</h1>
            <input
              type="button"
              onClick={() => {
                if (delete_acc) {
                  dispatch(PopupConfirmAction());
                } else {
                  setPopup(!popup);
                }
              }}
              value="OK"
            />
          </Popup>
        </div>
      )}
    </>
  );
};

export default DeleteAccount;
