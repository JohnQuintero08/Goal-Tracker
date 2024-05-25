import React from "react";
import "../styles/header.css"
import { useContext } from "react";
import { UserContext } from "../src/App";
import { NavLink } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

const Header = ()=>{
    const {checkAuth} = useContext(UserContext)
    return(
        <nav className="container-header">
{/*             <button className="button-header button-mode">
                <IoMdSunny className="header-icon"/>
            </button> */}
{/*             <NavLink to="settings" className="button-header button-settings">
                <IoSettings className="header-icon"/>
            </NavLink> */}
            {!checkAuth && 
                <div 
                    style={{backgroundColor: "var(--greyClear)", padding: "1rem", borderRadius: "20px", fontWeight: "500"}}
                >
                    <p>Demo Account</p>
                </div>
            }
            <NavLink to="/user" className="button-header button-user">
                <FaUserAlt className="header-icon"/>
            </NavLink>
        </nav>
    )
}

export default Header