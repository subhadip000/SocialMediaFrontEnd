import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowButton from "../../ShowButton/ShowButton";
import { useState } from "react";
import { useEffect } from "react";
import { MyProfileAction } from "../../../../redux/slices/UserSlice";
import {
  UpdateEmailAction,
  VerifyNewEmailAction,
} from "../../../../redux/slices/AuthSlice";
import * as Yup from "yup";
import { useFormik } from "formik";
import Popup from "../../../popup/Popup";

// Form Schema
const mailSchema = Yup.object({
  oldPassword: Yup.string().required("Password is required").password(),
  newEmail: Yup.string().required("Email is required").email(),
});

const UpdateEmail = () => {
  const dispatch = useDispatch();

  const { myInfo } = useSelector((state) => state?.user);
  const { isLoading, otpSend, otpCheck } = useSelector((state) => state?.auth);

  const [hide, setHide] = useState(true);

  useEffect(() => {
    dispatch(MyProfileAction());
  }, [dispatch, hide]);

  const [show, setShow] = useState(true);

  // formik
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newEmail: "",
    },

    onSubmit: (values) => {
      dispatch(
        UpdateEmailAction({
          oldPassword: values.oldPassword,
          newEmail: values.newEmail,
        })
      );
      if (!otpSend?.message) {
        setHide((prev) => (prev = false));
      }
      values.oldPassword = "";
      values.newEmail = "";
    },

    validationSchema: mailSchema,
  });

  const [otp, setOtp] = useState("");

  const [popup, setPopup] = useState(false);

  const errStyle = {
    color: "red",
  };

  return (
    <>
      {show ? (
        <ShowButton show={show} setShow={setShow} Value="Update Email" />
      ) : (
        <div>
          <h2 style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
            Update Your Email
          </h2>
          <div className="UpdateEmail">
            <div>
              <label htmlFor="email">Your Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                value={myInfo?.email}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="oldPassword"
                id="oldPassword"
                value={formik.values.oldPassword}
                onChange={formik.handleChange("oldPassword")}
                onBlur={formik.handleBlur("oldPassword")}
                placeholder="Your Password"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="NewEmail">New Email: </label>
              <input
                type="email"
                name="NewEmail"
                id="NewEmail"
                value={formik.values.newEmail}
                onChange={formik.handleChange("newEmail")}
                onBlur={formik.handleBlur("newEmail")}
                placeholder="New Email"
              />
            </div>
            <div>
              <input
                type="button"
                className="btn"
                value="Send OTP"
                onClick={formik.handleSubmit}
              />
            </div>
          </div>
          <small style={errStyle}>{otpSend?.message}</small>
          <div className="otp" style={hide ? { display: "none" } : null}>
            <label htmlFor="otp">OTP</label>
            <input
              type="otp"
              name="otp"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <input
              type="button"
              className=""
              value="Verify"
              onClick={() => {
                dispatch(
                  VerifyNewEmailAction({
                    otp,
                    newEmail: formik.values.newEmail,
                  })
                );
                setHide((prev) => (prev = true));
                setPopup((prev) => (prev = true));
              }}
            />
          </div>
        </div>
      )}

      <Popup trigger={popup} setTrigger={setPopup} name="Update Message">
        {isLoading === false ? <h3>{otpCheck?.msg}</h3> : <h3>Loading...</h3>}
      </Popup>
    </>
  );
};

export default UpdateEmail;
