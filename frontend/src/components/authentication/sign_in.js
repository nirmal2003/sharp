import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios_config from "../../utils/axios_config";
import AuthenticationWrapper from "./wrapper";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const signin_user = async () => {
        try {
            const response = await axios_config.post('/auth/login', { email, password });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthenticationWrapper>
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="text-2xl text-gray font-light">Login to your account</h2>
                        {/*<h2 className="text-2xl text-gray font-light mt-3">continue your journeyer</h2>*/}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-white-placeholder">email</label>
                        <input type="text" placeholder="name@example.com" onChange={(event) => setEmail(event.target.value)} className="w-96 py-3 px-4 rounded-md border-2 border-border-color placeholder:text-white-placeholder text-gray text-sm mt-2" />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label className="text-sm text-white-placeholder">password</label>
                        <input type="password" placeholder="••••••••" onChange={(event) => setPassword(event.target.value)} className="w-96 py-3 px-4 rounded-md border-2 border-border-color placeholder:text-white-placeholder text-gray text-sm mt-2" />
                    </div>
                    <button onClick={signin_user} className="w-96 py-3 px-4 rounded-md border-2 border-border-color text-gray text-sm bg-light-hover-transparent mt-9 cursor-pointer hover:bg-light-transparent">Sign In</button>
                    <div className="flex items-center mt-7">
                        <div className="w-40 h-0.5 bg-light-transparent"></div>
                        <h3 className="text-gray mx-3">Or</h3>
                        <div className="w-40 h-0.5 bg-light-transparent"></div>
                    </div>
                    <button className="w-96 py-3 px-4 rounded-md border-2 border-border-color text-gray text-sm bg-light-hover-transparent mt-9 cursor-pointer hover:bg-light-transparent flex items-center justify-center">
                        <img src="/images/icons/google.svg" alt="google" className="w-4 mr-3" />
                        Sign In with Google
                    </button>
                    <p className="mt-7 text-gray font-light" style={{ fontSize: '0.8rem' }}>I haven't account | <Link to="/signup" className="underline">Sign Up</Link></p>
                </div>
            </div>
        </AuthenticationWrapper>
    )
}

export default SignIn;