import React from "react";
import Logo from "./logo.png";
import {Link} from 'react-router-dom';
import './App.css';


function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <img src={Logo} alt="cookbook logo"/>
            {/* <h3>Logo</h3> */}
            <ul className = "nav-links">
                <Link style={navStyle} to = '/cookbook'>
                    <li>CookBook</li>
                </Link>
                <li>Recipe</li>
            </ul>
        </nav>
    );
}

export default Nav;