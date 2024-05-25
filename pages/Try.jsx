import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import "../styles/try.css"

import NavbarTry from "../components/NavbarTry"
import Header from "../components/Header"

const Try = ()=>{
    
    return(
        <div className="main-screen">
            <h1 className="main-title">TRY</h1>
            <Header className="main-header"/>
            <div className="section-try">
{/*                 <h1>Your Goals</h1>
                <div className="sub-menu">
                    <NavLink to="."> My Goals </NavLink>
                    <NavLink to="goalCreator"> Create New Goals </NavLink>
                </div> */}
                <Outlet/>
            </div>
            <div className="container-navbarTry">
                <NavbarTry />
            </div>
        </div>
    )
}

export default Try