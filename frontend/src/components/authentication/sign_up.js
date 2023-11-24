import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios_config from "../../utils/axios_config";
import AuthenticationWrapper from "./wrapper";

const SignUp = () => {

    const [openSecondStage, setOpenSecondStage] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const navigate = useNavigate();

    const check_email_exists = () => {
        setOpenSecondStage(true);
    }

    const create_user = async () => {
        if (password === passwordConfirm) {
            try {
                const response = await axios_config.post('/auth/register', { username, email, password });
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <AuthenticationWrapper>
            <div className="flex justify-center items-center" style={{ height: '100vh' }}>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="text-2xl text-gray font-light">Unleash Your Productivity</h2>
                        <h2 className="text-2xl text-gray font-light mt-3">Get Started with Sharp Today!</h2>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-white-placeholder">work email</label>
                        <input type="text" placeholder="name@example.com" onChange={(event) => setEmail(event.target.value)} className="w-96 py-3 px-4 rounded-md border-2 border-border-color placeholder:text-white-placeholder text-gray text-sm mt-2" />
                    </div>
                    {openSecondStage && (
                        <>
                            <div className="flex flex-col mt-5">
                                <label className="text-sm text-white-placeholder">username</label>
                                <input type="text" placeholder="your name" onChange={(event) => setUsername(event.target.value)} className="w-96 py-3 px-4 rounded-md border-2 border-border-color placeholder:text-white-placeholder text-gray text-sm mt-2" />
                            </div>
                            <div className="flex flex-col mt-5">
                                <label className="text-sm text-white-placeholder">password</label>
                                <input type="password" placeholder="••••••••" onChange={(event) => setPassword(event.target.value)} className="w-96 py-3 px-4 rounded-md border-2 border-border-color placeholder:text-white-placeholder text-gray text-sm mt-2" />
                            </div>
                            <div className="flex flex-col mt-5">
                                <label className="text-sm text-white-placeholder">confirm password</label>
                                <input type="password" placeholder="••••••••" onChange={(event) => setPasswordConfirm(event.target.value)} className="w-96 py-3 px-4 rounded-md border-2 border-border-color placeholder:text-white-placeholder text-gray text-sm mt-2" />
                            </div>
                        </>
                    )}
                    {openSecondStage ? (
                        <button onClick={create_user} className="w-96 py-3 px-4 rounded-md border-2 border-border-color text-gray text-sm bg-light-hover-transparent mt-9 cursor-pointer hover:bg-light-transparent">Sign Up</button>
                    ) : (
                        <button onClick={check_email_exists} className="w-96 py-3 px-4 rounded-md border-2 border-border-color text-gray text-sm bg-light-hover-transparent mt-9 cursor-pointer hover:bg-light-transparent">Continue</button>
                    )}
                    <div className="flex items-center mt-7">
                        <div className="w-40 h-0.5 bg-light-transparent"></div>
                        <h3 className="text-gray mx-3">Or</h3>
                        <div className="w-40 h-0.5 bg-light-transparent"></div>
                    </div>
                    <button className="w-96 py-3 px-4 rounded-md border-2 border-border-color text-gray text-sm bg-light-hover-transparent mt-9 cursor-pointer hover:bg-light-transparent flex items-center justify-center">
                        <img src="/images/icons/google.svg" alt="google" className="w-4 mr-3" />
                        Continue with Google
                    </button>
                    <p className="mt-7 text-gray font-light" style={{ fontSize: '0.8rem' }}>I have an account | <Link to="/signin" className="underline">Sign IN</Link></p>
                </div>
            </div>
        </AuthenticationWrapper>
    )
}

export default SignUp;