import React from "react"
import "../styles/progressComponent.css"

const ProgressComponent = ({children, progress}) => {

    return (
        <div 
            className="container-progress-bar" 
            style={{'--progress-width': `${progress}%`}}
        >
            <p 
                className="text-progress-bar"
                style={progress>20 ? {color: "var(--white)"} : {color: "var(--black)"}}
            >{children}</p>
            <p 
                className="text-progress-bar" 
                style={progress>80 ? {color: "var(--white)"} : {color: "var(--black)"}}
            >{progress}%</p>
        </div>
    )
}

export default ProgressComponent
