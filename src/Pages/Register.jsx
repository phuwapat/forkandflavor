import React from "react";
import FormInput from "../Components/FormInput";
import BtnBack from "../Components/BtnBack";

function Register (){
    return (
        <div className="Register__Page">
            <div className="Register__field">
                <BtnBack path={-1}/>
                <header><h1 className="fredoka">Create an <br/>account</h1></header>
                <form className="Register__form">
                    <FormInput
                        label = "username"
                        name = "username"
                        type = "text"
                    />
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
                    <button className="Register__btn noto-sans-thai-looped-bold">Join now</button>
                </form>
            </div>
            <div className="Register__bg"></div>
        </div>
    )
}

export default Register