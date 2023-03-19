import React from "react";

const ChangePassword = () => {
  return (
    <>
      <form method="post">
        <h2>Set Your New Password</h2>
        <label>
          New Password:
          <input type="password" name="newpass" id="newpass" />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmpass" id="confirmpass" />
        </label>
        <button type="submit">Change Password</button>
      </form>
    </>
  );
};

export default ChangePassword;
