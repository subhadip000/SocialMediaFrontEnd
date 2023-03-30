import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EmailVerifyAction,
  EmailVerifyOtpAction,
} from "../../../redux/slices/AuthSlice";
import { MyProfileAction } from "../../../redux/slices/UserSlice";
import ShowButton from "../ShowButton/ShowButton";

const EmailVerification = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MyProfileAction());
  }, [dispatch]);

  const { myInfo } = useSelector((state) => state?.user);
  console.log("my email: ", myInfo?.email);
  console.log("isVerified: ", myInfo?.isVerified);

  const [otp, setOtp] = useState("");

  const [show, setShow] = useState(true);

  const [hide, setHide] = useState(true);

  return (
    <>
      {show ? (
        <ShowButton show={show} setShow={setShow} Value="Verify Email" />
      ) : !myInfo?.isVerified ? (
        <div>
          <h2 style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
            Verify Your Email
          </h2>
          <div className="email">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={myInfo?.email}
              readOnly
            />
            <input
              type="button"
              className=""
              value="Send OTP"
              onClick={() => {
                dispatch(EmailVerifyAction());
                console.log(myInfo?.email);
                setHide(false);
              }}
            />
          </div>
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
                dispatch(EmailVerifyOtpAction({ otp }));
                setHide(true);              
              }}
            />
          </div>
        </div>
      ) : <h3 style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>Your account is Verified✅</h3>
      }
    </>
  );
};

export default EmailVerification;
