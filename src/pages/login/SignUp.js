import React from 'react'
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';

function SignUp() {
    return (
        <>

            <form action="#" className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                    <i><FaUserAlt /></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                    <i><FaEnvelope /></i>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-field">
                    <i><FaLock /></i>
                    <input type="password" placeholder="Password" />
                </div>
                <input type="submit" className="btn" value="Sign up" />
            </form>

        </>
    )
}

export default SignUp