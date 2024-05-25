import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import "../styles/goal.css"
import ButtonTaskElement from "./ButtonTaskElement.jsx";
import { UserContext } from "../src/App";
import ButtonGeneral from "./ButtonGeneral.jsx";
import DayBand from "./DayBand.jsx";
import GoalFiller from "./GoalFiller.jsx";
import { FaRegTrashAlt } from "react-icons/fa";

const Goal = () => {
    const [isDeleted, setIsDeleted] = useState(false)
    const {listOfGoals, deleteGoal, updateTaskStatus} = useContext(UserContext)
    const params = useParams()
    const navigate = useNavigate()
    const isInitialMount = useRef(true);
    
    function fetchDemoData(data){
        const goalSelected = data.filter(goal => {
            return goal.id === params.id
        })
        return goalSelected
    }

    function handleClick(){
        setIsDeleted(true)
        deleteGoal(params.id)
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if(isDeleted){
                setTimeout(() => {
                    navigate("../");
                }, 1000);
            }
        }
    }, [isDeleted, navigate]);

    if(isDeleted){
        return <GoalFiller icon={<FaRegTrashAlt style={{width: "100px", height: "100px"}}/>}>Goal succesfully deleted</GoalFiller>
    }else{
        const {id, myGoal, numberTime, unitTime, date, days, task, percentage} = fetchDemoData(listOfGoals)[0]
        
        const formatDays = days
            .filter(day => day.dayIsActive === true)
            .map((day, index)=>{
                const text = day.id[0].toUpperCase() + day.id.slice(1,day.id.length)
                return <DayBand key={index}>{text}</DayBand>
            })
        
        const formatTasks = task.map((elem, index) =>{
            return (
                <ButtonTaskElement 
                    onClick={()=>updateTaskStatus(id, elem.id)}
                    status={elem.isDone}
                    key={index}
                >{elem.task}</ButtonTaskElement>
            )
        })
        return (
            <div className="container-goal">
                <div className="header-goal">
                    <h3 className="title-goal">{myGoal}</h3>
                    <h2>{percentage}%</h2>
                </div>
                <div className="container-goal-wrap">
                    <div className="element-goal days">
                        <h4>Commited days</h4>  
                        <div 
                            style={{display: "flex", 
                                flexWrap: "wrap", 
                                justifyContent: "center",
                                gap: "0.5rem", 
                                width:"90%"}}
                        >{formatDays}</div>
                    </div>
                    <div className="element-goal time">
                        <h4 >{numberTime} {unitTime} per day</h4>
                    </div>
                    <div className="element-goal date">
                        <h4>Will be achieved on:</h4>
                        <p>{date.toDateString()}</p>
                    </div>
                </div>
                <div className="container-list-task">
                    <h4>My task list</h4>
                    <div>
                        {formatTasks}
                    </div>
                </div>
                <div className="container-buttons-end">
                    <ButtonGeneral onClick={handleClick}>Delete</ButtonGeneral>
                    <ButtonGeneral>Edit</ButtonGeneral>
                </div>
            </div>
        )
    }
}

export default Goal