import React from "react";
import * as Yup from "yup";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { UserLoginAction } from "../../redux/slices/AuthSlice";

//Form schema
const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const dispatch = useDispatch();

  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      //dispath the action
      dispatch(UserLoginAction(values));
      // console.log(values);
    },
    validationSchema: formSchema,
  });

  const { appErr, serverErr } = useSelector((state) => state.auth);

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <strong className="error">
          {serverErr === "Network Error" ? serverErr : null}
        </strong>
        <strong className="error">{appErr ? appErr : null}</strong>
        <div className="input-field">
          <i>
            <FaUserAlt />
          </i>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            autoComplete="off"
          />
          <small className="error">
            {formik.touched.email && formik.errors.email}
          </small>
        </div>
        <div className="input-field">
          <i>
            <FaLock />
          </i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
          />
          <small className="error">
            {formik.touched.password && formik.errors.password}
          </small>
        </div>
        <input type="submit" value="Login" className="btn solid" />
      </form>
      <div className="forgetPass">
        <Link to="/forget-pass">Forget Password?</Link>
      </div>
    </>
  );
};

export default SignIn;
