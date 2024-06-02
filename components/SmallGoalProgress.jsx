import React from "react";
import "../styles/smallGoalProgress.css"
import ButtonMiniDash from "./ButtonMiniDash"
import { UserContext } from "../src/App"
import { useContext } from "react"
import ProgressComponent from "./ProgressComponent";
import { AiFillShop } from "react-icons/ai";

const SmallGoalProgress = () =>{
    const {listOfGoals} = useContext(UserContext)

    const goalsProgress = listOfGoals.slice(0,3).map((goal, index) => {
        return (
            <ProgressComponent
                key={index}
                progress={goal.percentage}
            > {goal.myGoal}</ProgressComponent>
        )
    })

    const noProgressMessage = 
    <div style={{display:"flex", height: "80%",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <AiFillShop style={{fill: "var(--blue)", width: "60px", height: "60px"}}/>
        <p style={{fontSize: "2rem", marginTop: "1rem"}}>Why don't you start a new bussines?</p>
    </div>

    return ( 
        <div className="container-goal-progress-inner">
            <div className="header-goal-progress-inner">
                <h2>Goal Progress</h2>
{/*                 <ButtonMiniDash to="statistics" >Statistics</ButtonMiniDash> */}
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "20px", height: "100%"}}>
                {goalsProgress.length>0 ? goalsProgress : noProgressMessage}
            </div>
        </div>
    )
}
export default SmallGoalProgress