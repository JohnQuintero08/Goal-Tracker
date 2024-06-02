import React from "react"
import { Outlet } from "react-router-dom"
import "../styles/try.css"

import NavbarTry from "../components/NavbarTry"
import Header from "../components/Header"

const Try = ()=>{
    
    return(
        <div className="main-screen">
            <div className="container-navbarTry">
                <NavbarTry />
            </div>
            <div className="main-title">
                <h1 >TRY</h1>
            </div>
            <Header className="main-header"/>
            <div className="section-try">
                <Outlet/>
            </div>
        </div>
    )
}

export default Try