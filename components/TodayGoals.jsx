import React from "react";
import "../styles/todayGoals.css"
import { UserContext } from "../src/App";
import { useContext } from "react";

import GoalCard from "./GoalCard";
import ButtonMiniDash from "./ButtonMiniDash";

const TodayGoals = () => {
    const {listOfGoals} = useContext(UserContext)

    const goalCards = listOfGoals.map(goal => {
        return (
            <GoalCard
                title={goal.myGoal}
                task={goal.task[0].task}
                key={goal.id}
                id={goal.id}
            ></GoalCard>
        )
    })
    return(
        <div className="container-today-goals-inner">
            <div className="header-today-goals-inner">
                <h2>Today Goals</h2>
                <ButtonMiniDash to="myGoals" >See All</ButtonMiniDash>
            </div>
            <div className="container-all-today-goals">
                {goalCards}
            </div>
        </div>
    )
}

export default TodayGoals