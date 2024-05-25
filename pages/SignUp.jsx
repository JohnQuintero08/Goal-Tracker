import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaGoogle } from "react-icons/fa";
import "../styles/signUp.css"
import {createUser} from "../src/authentication"
import PopUp from "../components/PopUp";

const SignUp = () =>{
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [confirm, setConfirm] = useState(false)
    const [popUp, setPopUp] = useState(false)

    function handleChange(event){
        setFormData(prevData =>{
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
    }
    function handleSignUp(event){
        event.preventDefault()
        const checkPass = checkPassword(formData.password, formData.confirmPassword)
        if(checkPass){
            setConfirm(false)
            createUser(formData.email, formData.confirmPassword)
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
            setPopUp(true)
        }else{
            setConfirm(true)
        }
    }
    function checkPassword(pass, confirm){
        if(pass === confirm){
            return true
        }else{
            return false
        }
    }

    return (
        <div className="page-sign-up">
            {popUp && <PopUp>Account succesfully created please return to Log In page</PopUp>}
            <form className="container-sign-up"onSubmit={handleSignUp}>
                <div className="form-sign-up" >
                    <Link to="../logIn">Log in</Link>
                    <h1>Sign Up</h1>
                    <div>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="John Smith"
                            value={formData.fullName}
                            onChange={handleChange}
                        >
                        </input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            required
                            placeholder="user@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        >
                        </input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="********"
                            value={formData.password}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            placeholder="********"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        ></input>
                        {confirm && <p className="text-check">*different passwords</p>}
                    </div>
                </div>
                <div className="other-sign-up">
                        <button >Sign Up</button>
                        <p>or</p>
                        <button className="button-google">
                            <FaGoogle style={{transform: "translateY(3px)",
                                width: "17px",
                                height: "17px",
                                marginRight: "20px",
                                fill: "var(--blue)"
                            }}/> 
                            Sign Up with Google 
                        </button>
                        demo@goaltracker.com
                        integlurio32
                    </div>
            </form>
        </div>
    )
}

export default SignUp