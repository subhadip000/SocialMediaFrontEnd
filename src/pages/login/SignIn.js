import React from 'react'
import { FaUserAlt, FaLock } from 'react-icons/fa';

function SignIn() {
    return (
        <>

            <form action="#" className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                    <i><FaUserAlt /></i>

                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                    <i><FaLock /></i>
                    <input type="password" placeholder="Password" />
                </div>
                <input type="submit" value="Login" className="btn solid" />

            </form>

        </>
    )
}

export default SignIn