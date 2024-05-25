import React, { useEffect } from "react";
import { TiTick } from "react-icons/ti";

const containerStyle = {
    width: "100%",
    backgroundColor: "var(--blue)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "20px",
    padding: "0.7rem 1rem",
    
}
const textStyle = {
    color: "var(--white)",
}
const buttonStyle = {
    border: "none",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    cursor: "pointer"
}
const buttonStyleNotSelected = {
    backgroundColor: "var(--blueClear)",
}
const buttonStyleSelected = {
    backgroundColor: "var(--white)"
}

const ButtonTaskElement = ({children, onClick, status})=>{
    
    return(
        <div style={containerStyle}>
            <p style={textStyle}>{children}</p>
            <button 
                style={status ? {...buttonStyle,...buttonStyleSelected} :{...buttonStyle,...buttonStyleNotSelected}}
                onClick={onClick}
            >
            <TiTick 
                style={status ? {fill: "var(--green)"} : {fill: "var(--blue)"}}
            />
            </button>
        </div>
    )
}

export default ButtonTaskElement