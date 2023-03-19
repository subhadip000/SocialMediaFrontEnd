import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ForgetPasswordAction } from "../../redux/slices/AuthSlice";

const ForgetPass = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      <form
        className="forget-pass-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("calling onSubmit");
          dispatch(ForgetPasswordAction({ email }));
        }}
      >
        <h2>Give us your registered email</h2>
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
      <form>
        <h2>Verify Your OTP</h2>
        <label>Otp: </label>
        <input type="text" name="otp" id="otp" placeholder="OTP" />
        <button type="submit">Verify</button>
      </form>
    </>
  );
};

export default ForgetPass;
