import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeactivateAccountAction,
  PopupConfirmAction,
} from "../../../redux/slices/AuthSlice";
import Popup from "../../popup/Popup";

const Deactivation = ({styleHead}) => {
  const dispatch = useDispatch();

  const { serverErr, appErr, deactivate_acc } = useSelector(
    (state) => state.auth
  );

  const [show, setShow] = useState(true);

  const [confirm, setConfirm] = useState("");

  const [popup, setPopup] = useState(false);

  const clickDeactivate = () => {
    dispatch(DeactivateAccountAction({ password: confirm }));
    setPopup(!popup);
  };

  return (
    <>
      {show ? (
        <div>
          <h3 style={styleHead} onClick={() => setShow(!show)}>
          Deactivate Account
          </h3>
        </div>
      ) : (
        <div className="password-popup">
          <h2 style={styleHead} onClick={() => setShow(!show)}>Deactivation</h2>
          <strong className="error">
            {serverErr === "Network Error" ? serverErr : null}
          </strong>
          <strong className="error">{appErr ? appErr : null}</strong>
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
          <input type="button" value="Deactivate" onClick={clickDeactivate} />
          <Popup
            trigger={popup}
            setTrigger={setPopup}
            name={""}
            isRequired={"No"}
          >
            <h1>{deactivate_acc ? "See you soon again😇" : "Try Again"}</h1>
            <input
              type="button"
              onClick={() => {
                if (deactivate_acc) {
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

export default Deactivation;
