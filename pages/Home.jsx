import React from "react"
import "../styles/home.css"
import TodayGoals from "../components/TodayGoals"
import SmallCalendar from "../components/SmallCalendar"
import SmallGoalProgress from "../components/SmallGoalProgress"

const Home = ()=>{
    return (
        <div className="container-home">
            <div className="cont container-today-goals">
                <TodayGoals/>
            </div>
            <div className="cont container-small-calendar">
                <SmallCalendar/>
            </div>
            <div className="cont container-goals-progress">
                <SmallGoalProgress/>
            </div>
        </div>
    )
}

export default Home