import React, { useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import {
  ChangePasswordAction,
  ForgetPasswordAction,
} from "../../redux/slices/AuthSlice";
import { useFormik } from "formik";

// Email Form Schema
const emailFormSchema = Yup.object({
  email: Yup.string().required("Enter your registered email only."),
});

// OTP Form Schema
const otpFormSchema = Yup.object({
  otp: Yup.string().required("Enter otp to change password"),
});

const ForgetPass = () => {

  const dispatch = useDispatch();

  // Email Formik
  const emailFormik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log("calling onSubmit");
      dispatch(ForgetPasswordAction(values));
    },
    validationSchema: emailFormSchema,
  });

  console.log(emailFormik.values.email);

  // OTP Formik
  const otpFormik = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: (values) => {
      console.log("email: ", emailFormik.values.email);
      console.log("calling otp onsubmit");
      dispatch(ChangePasswordAction({email: emailFormik.values.email, otp: values.otp}));
    },
    validationSchema: otpFormSchema,
  });

  const { appErr, serverErr, forget_pass, token } = useSelector(
    (state) => state.auth
  );

  if (token) {
    console.log("email from token: ", token);
    return <Navigate to={`/change-pass/${emailFormik.values.email}`} />;
  }

  const errStyle = {
    color: "red",
  };

  return (
    <>
      {forget_pass ? (
        <form
          className="forget-pass-form"
          onSubmit={otpFormik.handleSubmit}
        >
          <h2>Verify Your OTP</h2>
          <strong style={errStyle}>
            {serverErr === "Network Error" ? serverErr : null}
          </strong>
          <strong style={errStyle}>{appErr ? appErr : null}</strong>
          <label>Otp: </label>
          <input
            type="text"
            name="otp"
            id="otp"
            onChange={otpFormik.handleChange("otp")}
            value={otpFormik.values.otp}
            placeholder="OTP"
            onBlur={otpFormik.handleBlur("otp")}
          />
          <small style={errStyle}>
            {otpFormik.touched.otp && otpFormik.errors.otp}
          </small>
          <input type="submit" value="Verify" />
        </form>
      ) : (
        <form
          className="forget-pass-form"
          onSubmit={emailFormik.handleSubmit}
        >
          <h2>Give us your registered email</h2>
          <strong style={errStyle}>
            {serverErr === "Network Error" ? serverErr : null}
          </strong>
          <strong style={errStyle}>{appErr ? appErr : null}</strong>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={emailFormik.handleChange("email")}
            value={emailFormik.values.email}
            placeholder="email"
            onBlur={emailFormik.handleBlur("email")}
          />
          <small style={errStyle}>
            {emailFormik.touched.email && emailFormik.errors.email}
          </small>
          <input type="submit" value="Send OTP" />
        </form>
      )}
    </>
  );
};

export default ForgetPass;
