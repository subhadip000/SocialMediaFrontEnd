import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { ChangePasswordAction, ForgetPasswordAction } from "../../redux/slices/AuthSlice";

const ForgetPass = () => {
  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();

  // const [show, setShow] = 

  const { appErr, serverErr, forget_pass, token } = useSelector((state) => state.auth);

  if (token) {
    return <Navigate to={`/change-pass?email=${email}`} />;
  }

  return (
    <>
      {forget_pass ? (
        <form className="forget-pass-form" onSubmit={(e) => {
          e.preventDefault()
          console.log("calling otp onsubmit");
          dispatch(ChangePasswordAction({ email, otp }))
        }}>
          <h2>Verify Your OTP</h2>
          <strong className="error">
            {serverErr === "Network Error" ? serverErr : null}
          </strong>
          <strong className="error">{appErr ? appErr : null}</strong>
          <label>Otp: </label>
          <input
            type="text"
            name="otp"
            id="otp"
            onChange={(e) => setOtp(e.target.value)}
            value={otp}
            placeholder="OTP"
          />
          <input type="submit" value="Verify" />
        </form>
      ) : (
        <form
          className="forget-pass-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("calling onSubmit");
            dispatch(ForgetPasswordAction({ email }));
          }}
        >
          <h2>Give us your registered email</h2>
          <strong className="error">
            {serverErr === "Network Error" ? serverErr : null}
          </strong>
          <strong className="error">{appErr ? appErr : null}</strong>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
          />
          <input type="submit" value="Send OTP" />
        </form>
      )}
    </>
  );
};

export default ForgetPass;
