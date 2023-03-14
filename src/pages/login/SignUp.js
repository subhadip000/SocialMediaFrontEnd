import React from 'react'
import * as Yup from "yup";
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { UserRegisterAction } from '../../redux/slices/UserSlice';


//Form schema
const formSchema = Yup.object({
    firstName: Yup.string().required("firstName is required"),
    lastName: Yup.string().required("lastName is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
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

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                    <i><FaUserAlt /></i>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange("firstName")}
                    />
                </div>
                <div className="input-field">
                    <i><FaUserAlt /></i>
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange("lastName")}
                    />
                </div>
                <div className="input-field">
                    <i><FaEnvelope /></i>
                    <input
                        type="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                    />
                </div>
                <div className="input-field">
                    <i><FaLock /></i>
                    <input
                        type="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange("password")}
                    />
                </div>
                <input type="submit" className="btn" value="SignUp" />
            </form>

        </>
    )
}

export default SignUp