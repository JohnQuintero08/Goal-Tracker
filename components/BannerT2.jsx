import React from "react";
import "../styles/bannerT2.css"

const BannerT2 = ({children, key})=>{
    return (
        <button className="container-banner-T2">
            <p>{children}</p>
        </button>
    )
}

export default BannerT2