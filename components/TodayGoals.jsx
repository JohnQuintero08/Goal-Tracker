import React from "react";
import "../styles/todayGoals.css"
import { UserContext } from "../src/App";
import { useContext } from "react";

import GoalCard from "./GoalCard";
import ButtonMiniDash from "./ButtonMiniDash";
import { FaUmbrellaBeach } from "react-icons/fa";

const TodayGoals = () => {
    const {listOfGoals} = useContext(UserContext)
    const today = new Date
    const arrayOfDayGoals = listOfGoals.filter(goal => {
        return goal.days[today.getDay()].dayIsActive === true
    })
    const goalCards = arrayOfDayGoals.slice(0,3).map(goal => {
        return (
            <GoalCard
                title={goal.myGoal}
                /* task={goal.task[0]?.task} */
                listOfTasks={goal.task}
                key={goal.id}
                id={goal.id}
            ></GoalCard>
        )
    })
    const noMoreGoalsMessage = 
        <div className="today-goals-message">
            <FaUmbrellaBeach style={{fill: "var(--blue)", width: "60px", height: "60px"}}/>
            <p style={{fontSize: "2rem"}}>Just have a day off today</p>
        </div>

    return(
        <div className="container-today-goals-inner">
            <div className="header-today-goals-inner">
                <h2>Today Goals</h2>
                <ButtonMiniDash to="myGoals" >See All</ButtonMiniDash>
            </div>
            <div className="container-all-today-goals">
                {arrayOfDayGoals.length>0 ? goalCards : noMoreGoalsMessage}
            </div>
        </div>
    )
}

export default TodayGoals