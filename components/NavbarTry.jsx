import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbarTry.css"

import { FaHouseChimney } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { GoGoal } from "react-icons/go";

const NavbarTry = ()=>{
    return (
        <nav className="navbarTry">
            <h1 className="navbar-title">Let's catch something great today!</h1>
            <div className="navbar-links">
                <NavLink 
                    to="/"
                >
                    <FaHouseChimney className="navbar-icon"/>
                    <p>Home</p>
                </NavLink>
                <NavLink 
                    to="myGoals"
                >
                    <GoGoal  className="navbar-icon"/>
                    <p>My Goals</p>
                </NavLink>
{/*                 <NavLink >
                    <GiNetworkBars className="navbar-icon"/>
                    <p>Statistics</p>
                </NavLink>
                <NavLink 
                    to="calendar"
                >
                    <FaCalendarAlt className="navbar-icon"/>
                    <p>Calendar</p>
                </NavLink> */}
{/*                 <NavLink >
                    <BsJournalBookmarkFill className="navbar-icon"/>
                    <p>Journal</p>
                </NavLink> */}
            </div>
            <div className="navbar-info">
                <p>You can achive your goals today, never give up.</p>
            </div>
        </nav>
    )
}

export default NavbarTry