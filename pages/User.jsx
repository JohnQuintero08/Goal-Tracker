import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/user.css"
import { signOutfunction } from "../src/authentication";
import { UserContext } from "../src/App";

const User = ()=>{
    const navigate = useNavigate()
    const {toogleAuth} = useContext(UserContext)

    function handleOut(){
        const signOutState = signOutfunction()
        if(signOutState){
            toogleAuth()
            navigate("../")
        }else{
            console.log("mk no salio")
        }
    }
    return (
        <div className="page-user">
                <div className="container-user">
                    <div className="container-user-data">
                        <div>
                            <Link to="../../">Home</Link>
                            <h3>User Information</h3>
                        </div>
                        <div>
                            <h4>Full name</h4>
                            <p> Demo Account</p>
                            <h4>E-mail</h4>
                            <p> demo@goaltask.com</p>
                        </div>
                    </div>
                    <div className="container-user-buttons">
                        <div><h1>User</h1></div>
                        <button onClick={handleOut}>Sign out</button>
                    </div>
                </div>
        </div>
    )
}

export default User