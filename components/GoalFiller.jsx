import React from "react";

const tytleStyle = {
    fontSize: "3rem",
    textAlign: "center",
}
const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "80%"
}
const GoalFiller = ({children, icon}) => {
    return (
        <div style={containerStyle}>
            <h1 style={tytleStyle}>{children}</h1>
            {icon}
        </div>
    )
}

export default GoalFiller