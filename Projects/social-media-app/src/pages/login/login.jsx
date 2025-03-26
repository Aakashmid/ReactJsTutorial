import React from 'react'
import './login.css'

export default function login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialApp</h3>
                    <span className="loginDesc">Connect with friends and the world around you on SocialApp .</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" className="loginInput" placeholder='Email'/>
                        <input type="password" className="loginInput" placeholder='Password'/>
                        <button className='loginButton'>Log In</button>
                        <span className="loginForget">Forget Password ?</span>
                        <button className='RegisterButton'>Create a New Account </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
