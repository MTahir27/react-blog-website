import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/signin" >Login</Link>
            <Link to="/createpost" >Create Post</Link>
        </nav>
    )
}

export default Navbar;