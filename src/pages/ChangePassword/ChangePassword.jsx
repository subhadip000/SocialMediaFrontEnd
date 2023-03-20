import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { NewPasswordAction } from "../../redux/slices/AuthSlice";

const ChangePassword = () => {
  const [params] = useSearchParams();

  const email = params.get("email");
  console.log("email: ", email);

  const dispatch = useDispatch();

  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const { serverErr, appErr, token, new_pass } = useSelector((state) => state.auth);

  if (new_pass) {
    return <Navigate to={"/login"} />;
  }

  const errStyle = {
    color: "red",
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("password: ", pass);
          dispatch(NewPasswordAction({ email, token, password: pass }));
        }}
      >
        <h2>Set Your New Password</h2>
        {pass !== confirmPass ? (
          <small style={errStyle}>Passwords don't match</small>
        ) : null}
        <strong className="error">
          {serverErr === "Network Error" ? serverErr : null}
        </strong>
        <strong className="error">{appErr ? appErr : null}</strong>
        <label>
          New Password:
          <input
            type="password"
            name="newpass"
            id="newpass"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmpass"
            id="confirmpass"
            onChange={(e) => setConfirmPass(e.target.value)}
            value={confirmPass}
          />
        </label>
        <input type="submit" value="Change Password" />
      </form>
    </>
  );
};

export default ChangePassword;
