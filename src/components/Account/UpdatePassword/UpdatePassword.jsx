import React from "react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePasswordAction } from "../../../redux/slices/AuthSlice";
import Popup from "../../popup/Popup";
import { useFormik } from "formik";
import { Navigate } from "react-router";
YupPassword(Yup);

// Form Schema
const passwordSchema = Yup.object({
  oldPassword: Yup.string().required("Password is required").password(),
  newPassword: Yup.string().required("Password is required").password(),
  confirmNewPassword: Yup.string().required("Password is required").password(),
});

const UpdatePassword = ({ styleHead }) => {
  const [show, setShow] = useState(true);

  const dispatch = useDispatch();

  const { appErr, serverErr, updatePass } = useSelector((state) => state?.auth);

  const [popup, setPopup] = useState(false);

  // formik
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },

    onSubmit: (values) => {
      dispatch(
        UpdatePasswordAction({
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        })
      );
      setPopup(true);
      values.oldPassword = "";
      values.newPassword = "";
      values.confirmNewPassword = "";
      //   console.log("onsubmit called");
    },

    validationSchema: passwordSchema,
  });

  const errStyle = {
    color: "red",
  };

  const formStyle = {
    border: "1px solid black",
    borderRadius: "10px",
    width: "300px",
    padding: "25px 0",
    marginTop: "10px",
  }

  return (
    <>
      {show ? (
        <div>
          <h3 style={styleHead} onClick={() => setShow(!show)}>
            Update Password
          </h3>
        </div>
      ) : (
        <div>
          <h2 style={styleHead} onClick={() => setShow(!show)}>
            Change Password
          </h2>
          <form style={formStyle} onSubmit={formik.handleSubmit}>
            <strong style={errStyle}>
              {serverErr === "Network Error" ? serverErr : null}
            </strong>
            <strong style={errStyle}>{appErr ? appErr : null}</strong>

            <label htmlFor="oldPassword">Old Password</label>
            <input
              type="password"
              name="oldPassword"
              id="oldPassword"
              onChange={formik.handleChange("oldPassword")}
              value={formik.values.oldPassword}
              onBlur={formik.handleBlur("oldPassword")}
            />

            {/* CONFIRM PASSWORD ERROR */}
            {formik.values.newPassword !== formik.values.confirmNewPassword ? (
              <small style={errStyle}>Passwords don't match</small>
            ) : null}

            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              onChange={formik.handleChange("newPassword")}
              value={formik.values.newPassword}
              onBlur={formik.handleBlur("newPassword")}
            />

            <small style={errStyle}>
              {formik.touched.newPassword && formik.errors.newPassword}
            </small>

            <label htmlFor="confirmNewPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmNewPassword"
              id="confirmNewPassword"
              onChange={formik.handleChange("confirmNewPassword")}
              value={formik.values.confirmNewPassword}
              onBlur={formik.handleBlur("confirmNewPassword")}
            />

            <input type="submit" value="Update" />
          </form>

          <Popup
            trigger={popup}
            setTrigger={setPopup}
            name={updatePass?.message}
            isRequired={""}
          />
        </div>
      )}
    </>
  );
};

export default UpdatePassword;
