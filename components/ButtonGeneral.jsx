import React from "react";

const styles={
    backgroundColor: "var(--blue)",
    border: "none",
    borderRadius: "20px",
    color: "var(--white)",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1.1rem",
    width: "180px",
    height: "40px"
}
const ButtonGeneral = ({children, onClick}) =>{
    return (
        <button style={styles} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonGeneral