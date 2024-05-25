import React from "react";
import "../styles/smallGoalProgress.css"
import ButtonMiniDash from "./ButtonMiniDash"
import { UserContext } from "../src/App"
import { useContext } from "react"
import ProgressComponent from "./ProgressComponent";

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

    return ( 
        <div className="container-goal-progress-inner">
            <div className="header-goal-progress-inner">
                <h2>Goal Progress</h2>
{/*                 <ButtonMiniDash to="statistics" >Statistics</ButtonMiniDash> */}
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                {goalsProgress}
            </div>
        </div>
    )
}
export default SmallGoalProgress