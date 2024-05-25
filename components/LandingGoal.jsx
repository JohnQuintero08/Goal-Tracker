import React from "react";
import { GoGoal } from "react-icons/go";
import GoalFiller from "./GoalFiller";

const  LandingGoal = () =>{
    return (
        <GoalFiller icon={<GoGoal style={{width: "100px", height: "100px"}}/>}>Explore or create new goals</GoalFiller>
    )
}
export default LandingGoal 