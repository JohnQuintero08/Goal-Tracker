import React from "react"
import {Link} from "react-router-dom"
import "../styles/buttonMiniDash.css"
import { IoIosArrowForward } from "react-icons/io";

const ButtonMiniDash = ({children, to})=> {
    return (
        <Link to={`${to}`} className="button-mini-dash">
            <p>{children}</p>
            <IoIosArrowForward style={{fill:"var(--white)", marginLeft: "0.3rem"}}/>
        </Link>
    )
}

export default ButtonMiniDash