import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbarTry.css"

import { FaHouseChimney } from "react-icons/fa6";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { FiMenu } from "react-icons/fi";


const NavbarTry = ()=>{
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpen(){
        setIsOpen(prev => !prev)
    }

    return (
        <nav className="navbarTry">
            <button 
                className="button-open-menu"
                onClick={toggleOpen}
            >
                <FiMenu style={{width: "20px", height: "20px"}}/>
            </button>
            <div className={isOpen ? "navbar-always" : "navbar-always navbar-closed"}>
                <h1 className="navbar-title">Let's catch something great today!</h1>
                <div className="navbar-links">
                    <NavLink 
                        to="/"
                        className={({ isActive }) =>isActive ? "button-nav button-nav-active" : "button-nav"}
                    >
                        <FaHouseChimney className="navbar-icon"/>
                        <p>Home</p>
                    </NavLink>
                    <NavLink 
                        to="myGoals"
                        className={({ isActive }) =>isActive ? "button-nav button-nav-active" : "button-nav"}
                    >
                        <GoGoal  className="navbar-icon"/>
                        <p>My Goals</p>
                    </NavLink>
    {/*                 <NavLink >
                        <BsJournalBookmarkFill className="navbar-icon"/>
                        <p>Journal</p>
                    </NavLink> */}
                </div>
                <div className="navbar-info">
                    <p>You can achive your goals today, never give up.</p>
                </div>
            </div>
        </nav>
    )
}

export default NavbarTry