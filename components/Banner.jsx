import React from "react";
import "../styles/banner.css"

import { FaPlus } from "react-icons/fa";

const Banner = ({children})=>{
    return (
        <button className="container-banner">
            <FaPlus 
                className="banner-icon"
                style={{fill: "var(--white)"}}
                /> 
            <p>{children}</p>
        </button>
    )
}

export default Banner