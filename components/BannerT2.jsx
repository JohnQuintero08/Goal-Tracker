import React from "react";
import "../styles/bannerT2.css"

const BannerT2 = ({children,  onClick})=>{
    return (
        <button 
            className="container-banner-T2"
            onClick={onClick}
        >
            <p>{children}</p>
        </button>
    )
}

export default BannerT2