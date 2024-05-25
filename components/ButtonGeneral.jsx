import React from "react";

const styles={
    backgroundColor: "var(--blue)",
    border: "none",
    borderRadius: "20px",
    padding: "1rem 4rem",
    color: "var(--white)",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1.1rem"
    
/*     :active{
        transform: scale(0.95);
    } */
}
const ButtonGeneral = ({children, onClick}) =>{
    return (
        <button style={styles} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonGeneral