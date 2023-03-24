import React from "react";
import * as Yup from "yup";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import YupPassword from "yup-password";
import { UserRegisterAction } from "../../redux/slices/AuthSlice";
YupPassword(Yup);

//Form schema
const formSchema = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .minUppercase(1, "Names must have the first letter as Capital!")
    .matches(/^[a-zA-Z]+$/, "Names can't contain digits or symbols"),
  lastName: Yup.string()
    .required("Last Name is required")
    .minUppercase(1, "Names must have the first letter as Capital!")
    .matches(/^[a-zA-Z]+$/, "Names can't contain digits or symbols"),
  email: Yup.string().required("Email is required").email(),
  password: Yup.string().required("Password is required").password(),
});

const SignUp = () => {
  const dispatch = useDispatch();

  //formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      //dispath the action
      dispatch(UserRegisterAction(values));
      // console.log(values);
    },
    validationSchema: formSchema,
  });

  const { appErr, serverErr } = useSelector((state) => state?.auth);

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <strong className="error">{serverErr === "Network Error" ? serverErr : null}</strong>
        <strong className="error">{appErr ? appErr : null}</strong>
        <div className="input-field">
          <i>
            <FaUserAlt />
          </i>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange("firstName")}
            autoComplete="off"
          />
        </div>
        <small className="error">
          {formik.touched.firstName && formik.errors.firstName}
        </small>
        <div className="input-field">
          <i>
            <FaUserAlt />
          </i>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange("lastName")}
            autoComplete="off"
          />
        </div>
        <small className="error">
          {formik.touched.lastName && formik.errors.lastName}
        </small>
        <div className="input-field">
          <i>
            <FaEnvelope />
          </i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            autoComplete="off"
            required
          />
        </div>
        <small className="error">
          {formik.touched.email && formik.errors.email}
        </small>
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
          />
        </div>
        <small className="error">
          {formik.touched.password && formik.errors.password}
        </small>
        <input type="submit" className="btn" value="SignUp" />
      </form>
    </>
  );
};

export default SignUp;
