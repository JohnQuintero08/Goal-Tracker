import React from "react"

const PopUp = ({children}) =>{
    const styles = {
        backgroundColor: "var(--green)",
        fontSize: "1rem",
        padding: "1rem 3rem",
        position: "fixed",
        top: "10px",
        left: "35%",
        borderRadius: "20px"
    }
    return (
        <div style={styles}>
            <p>{children}</p>
        </div>
    )
}

export default PopUp