import React from "react";

const styles = {
    borderRadius: "20px",
    padding: "0.4rem",
    backgroundColor: "var(--white)",
    textAlign: "center",
}
const DayBand = ({children}) => {
    return (
        <div style={styles}>
            <p style={{color: "var(--blue)"}}>{children}</p>
        </div>
    )
}

export default DayBand