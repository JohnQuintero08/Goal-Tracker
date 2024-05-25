import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../src/App.jsx" 
import { signIn } from "../src/authentication.js"
import "../styles/logIn.css"

const LogIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const {toogleAuth} = useContext(UserContext)

    function handleChange(event){
        setFormData(prevData =>{
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        signIn(formData.email, formData.password)
            .then(user => {
                if(user){
                    toogleAuth()
                    navigate("/user")
                }else{
                    console.log("wrong email or password")
                }
            })
            .catch(error => {
                console.error(error)
            })
    }  
    /* useEffect(()=>console.log(formData),[formData]) */
    return (
        <div className="page-log-in">  
            <form className="form-log-in" onSubmit={handleSubmit}>
                <Link  to="/">Home</Link>
                <h1>Login to your account</h1>
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
{/*                 demo@goaltracker.com
                        integlurio32 */}
                <button 
                    className="button-login-home" 
                >Log In</button>
            </form>
            <div className="demo">
{/*                 <h1>You don't need to register now, try a Demo </h1>
                <button>Demo</button> */}
                <h1>Don't have an account, you can register here</h1>
                <Link to="../signUp">Sign Up</Link>
            </div>
        </div>
    )
}

export default LogIn