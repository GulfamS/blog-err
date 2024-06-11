import React from "react"
import "./index.css"

const Login = () =>{
    return(
        <div className="login-container">   
            <form className="form-container"> 
            <label className="input-label" htmlFor="username">
                USERNAME
                </label>
                <input
                type="text"
                id="username"
                className="username-input-field"
                placeholder="Username"
                />
                <label className="input-label" htmlFor="password">
                    PASSWORD
                </label>
                <input
                type="password"
                id="password"
                className="password-input-field"
                placeholder="Password"
                />
                <div>
                    <button className="button">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login