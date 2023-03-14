import React from "react";
import * as Yup from "yup";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { UserLoginAction } from "../../redux/slices/UserSlice";
import { useFormik } from "formik";

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

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i>
            <FaUserAlt />
          </i>

          <input
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            // onBlur={formik.handleBlur("email")}
          />
          {/* <h3 className="error">
            {formik.touched.email && formik.errors.email}
          </h3> */}
        </div>
        <div className="input-field">
          <i>
            <FaLock />
          </i>
          <input
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            // onBlur={formik.handleBlur("password")}
          />
          {/* <h3 className="error">
            {formik.touched.email && formik.errors.email}
          </h3> */}
        </div>
        <input type="submit" value="Login" className="btn solid" />
      </form>
    </>
  );
};

export default SignIn;
