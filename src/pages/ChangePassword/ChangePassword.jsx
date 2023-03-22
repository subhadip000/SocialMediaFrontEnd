import React from "react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { NewPasswordAction } from "../../redux/slices/AuthSlice";
import { useFormik } from "formik";
YupPassword(Yup);

//Form schema
const formSchema = Yup.object({
  password: Yup.string().required("Password is required").password(),
  confPassword: Yup.string().required("Password is required").password(),
});

const ChangePassword = () => {
  const { email } = useParams();

  // console.log("email: ", email);

  const dispatch = useDispatch();

  const { serverErr, appErr, token, new_pass } = useSelector(
    (state) => state.auth
  );

  //formik
  const formik = useFormik({
    initialValues: {
      password: "",
      confPassword: "",
    },
    onSubmit: (values) => {
      // console.log("password: ", values);
      dispatch(NewPasswordAction({email, token, password: values.password}));
    },
    validationSchema: formSchema,
  });

  if (new_pass) {
    return <Navigate to={"/login"} />;
  }

  const errStyle = {
    color: "red",
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h2>Set Your New Password</h2>
        {/* CONFIRM PASSWORD ERROR */}
        {formik.values.password !== formik.values.confPassword ? (
          <small style={errStyle}>Passwords don't match</small>
        ) : null}
        <strong style={errStyle}>
          {serverErr === "Network Error" ? serverErr : null}
        </strong>
        <strong style={errStyle}>{appErr ? appErr : null}</strong>
        <label htmlFor="password">
          New Password:
          <input
            type="password"
            name="password"
            id="newpass"
            onChange={formik.handleChange("password")}
            value={formik.values.password}
            // onBlur={formik.handleBlur("password")}
          />
        </label>
        <small style={errStyle}>
          {formik.touched.password && formik.errors.password}
        </small>
        {/* CONFIRM PASSWORD FEATURE */}
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmpass"
            id="confirmpass"
            onChange={formik.handleChange("confPassword")}
            value={formik.values.confPassword}
            // onBlur={formik.handleBlur("confPassword")}
          />
        </label>
        <input type="submit" value="Change Password" />
      </form>
    </>
  );
};

export default ChangePassword;
