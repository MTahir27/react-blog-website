import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase-config';

const Navbar = ({ isAuth, setIsAuth }) => {
    const signOutUser = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/signin";
        })

    }
    return (
        <nav>
            <Link to="/" >Home</Link>
            {!isAuth ? <Link to="/signin" >Login</Link> :
                <>
                    <Link to="/createpost" isAuth={isAuth} >Create Post</Link>
                    <a onClick={signOutUser} style={{ cursor: "pointer" }}>Sign Out</a>
                </>
            }

        </nav>
    )
}

export default Navbar;