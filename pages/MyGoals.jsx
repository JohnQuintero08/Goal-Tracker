import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Banner from "../components/Banner"
import "../styles/myGoals.css"
import ButtonMiniDash from "../components/ButtonMiniDash"
import { UserContext } from "../src/App";
import GoalFiller from "../components/GoalFiller";
import { GiMountainClimbing } from "react-icons/gi";

const MyGoals = ()=>{
    const {listOfGoals} = useContext(UserContext)

    const bannersArray = listOfGoals.map(goal => {
        return (
            <Link 
                to={`./goal/${goal.id}`} 
                key={goal.id}
                className="banner-goal-link"
            >
                <Banner>
                    {goal.myGoal}
                </Banner>
            </Link>
        )
    })

    return(
        <div className="container-my-goals">
            <div className="container-goals-left">
                <div className="header-goals-left">
                    <h2>My Goals</h2>
                    <ButtonMiniDash to="goalCreator"> New Goal</ButtonMiniDash>
                </div>
                {listOfGoals.length > 0 ? 
                    bannersArray : 
                    <GoalFiller icon={<GiMountainClimbing style={{width: "100px", height: "100px"}}/>}>
                        You don't have any goals yet
                    </GoalFiller>
                }
            </div>
            <div className="container-goals-right">
                <Outlet />
            </div>
        </div>
    )
}

export default MyGoals