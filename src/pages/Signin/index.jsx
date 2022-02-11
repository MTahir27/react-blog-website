import React from 'react';
import { auth, provider } from "../../Firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signin = ({ setIsAuth }) => {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((resut) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        })
    }
    return (
        <div className='loginpage'>
            <p>Sign in with Coogle to Continue</p>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default Signin;