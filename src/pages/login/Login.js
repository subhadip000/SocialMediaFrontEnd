import React, { useState } from 'react'
import './Login.css'
import log from '../../assets/img/log.svg'
import reg from '../../assets/img/register.svg'
import SignIn from './SignIn';
import SignUp from './SignUp';

function Login() {

    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    return (
        <>

            <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <SignUp />
                        <SignIn />
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                                Sign up
                            </button>
                        </div>
                        <img src={log} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                                Sign in
                            </button>
                        </div>
                        <img src={reg} className="image" alt="" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login