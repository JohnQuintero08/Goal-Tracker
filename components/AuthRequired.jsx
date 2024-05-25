import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../src/App";

const AuthRequired= () => {
    const {checkAuth} = useContext(UserContext)
    if(!checkAuth) {
        return <Navigate to="logIn"/>
    }
    return <Outlet/>
}

export default AuthRequired