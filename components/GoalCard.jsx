import React from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

const containerStyle = {
    backgroundColor: "var(--blueClear)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    borderRadius: "20px",
    maxWidth: "190px",
    flex: "1", 
    padding: "1rem"
}
const headerCard = {
    display: "flex",
    justifyContent: "space-between",
    overflow: "hidden",
    height: "40px",
}
const headerButton = {
    backgroundColor: "var(--blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "23px",
    height: "23px",
    borderRadius: "5px"
}
const headerText = {
    maxWidth: "80%",
    overflow: "hidden",
    fontSize: "1.2rem"
}
const textStyle = {
    backgroundColor: "var(--white)",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "45px",
    borderRadius: "10px",
    padding: "1rem",
    overflow: "hidden"
}
const arrayStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem"
}
const GoalCard = ({title, listOfTasks, id})=>{
    const newList = listOfTasks.filter(elem => {
        return elem.isDone === false
    })
    const arrayOfTasks = newList.slice(0,2).map((elem, index) => {
        return (
            <div style={textStyle} key={index}>
                <p>{elem.task}</p>
            </div>
        )
    })
    const noMoreMessage = <div style={textStyle}><p>Nothing more today 🎉</p></div>
    return (
        <div style={containerStyle}>
            <div style={headerCard}>
                <h3 style={headerText}>{title}</h3>
                <Link 
                    style={headerButton} 
                    to={`myGoals/goal/${id}`}
                ><BsThreeDots style={{fill: "var(--white)"}}/></Link>
            </div>
            <div style={arrayStyle}>
                {newList.length>0 ? arrayOfTasks : noMoreMessage}
            </div>
        </div>
    )
}

export default GoalCard