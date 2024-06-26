import React from "react";
import FormInput from "../Components/FormInput"
import BtnBack from "../Components/BtnBack";

function Login() {
    return (
        <div className="Login__Page">
            <div className="Login__bg"></div>
            <div className="Login__field">
                <BtnBack path={-1}/>
                <header><img className="Login__Logo" src="../../public/Image/Logo/Logo.svg" alt="logo_ForkAndFlavor"/></header>
                <form className="Login__form">
                    <FormInput
                        label = "email"
                        name = "email"
                        type = "text"
            
                    />
                    <FormInput
                        label = "password"
                        name = "password"
                        type = "password"
                    />
                    <button className="Login__btn noto-sans-thai-looped-bold">Log In</button>
                </form>
                <p className="noto-sans-thai-looped-bold">don't have an account? <a href="/">Sign up</a></p>
            </div>
        </div>
    )
};

export default Login