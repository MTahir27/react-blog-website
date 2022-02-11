import React from 'react';
import { auth, provider } from "../../Firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
const Signin = ({ setIsAuth }) => {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((resut) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
        })
    }
    return (
        <div className='loginpage'>
            <p>Sign in with Coogle to COntinue</p>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default Signin;