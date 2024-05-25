import React from "react";
import "../styles/header.css"
import { NavLink } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

const Header = ()=>{
    return(
        <nav className="container-header">
{/*             <button className="button-header button-mode">
                <IoMdSunny className="header-icon"/>
            </button> */}
{/*             <NavLink to="settings" className="button-header button-settings">
                <IoSettings className="header-icon"/>
            </NavLink> */}
            <NavLink to="/user" className="button-header button-user">
                <FaUserAlt className="header-icon"/>
            </NavLink>
        </nav>
    )
}

export default Header