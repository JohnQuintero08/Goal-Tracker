import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../styles/goalCreator.css"
import {newGoal} from "../data"
import Calendar from "./Calendar"
import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";
import { nanoid } from 'nanoid'
import { UserContext } from "../src/App";
import ButtonGeneral from "./ButtonGeneral";
import GoalFiller from "./GoalFiller";
import { TiTickOutline } from "react-icons/ti";

const GoalCreator = ()=>{
    const [formData, setFormData] = useState(newGoal)
    // state that identifies if the goal has been created successfully and helps to render a message
    const [isCreated, setIsCreated] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const {upDateGoals} = useContext(UserContext)

    //Update input formData everytime it changes in the form
    function handleChange(event){
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    //Changes the state of the button of the different days of the week
    function toggle(id){
        setFormData(prevData =>{
            const days = prevData.days.map(day => { 
                return day.id === id ? {...day, dayIsActive: day.dayIsActive ? false : true}: {...day}
                })
            return {...prevData, days}
        })
    }

    //Update the date selector 
    function handleCalendar(date){
        setFormData(prevData =>{
            return {
                ...prevData,
                date: date
            }
        })
    }

    //Update the tasks in the goal
    function handleTask(taskFromCreator){
        setFormData(prevData=>{
            let updatedTasks =[...prevData.task] 
            updatedTasks.push(taskFromCreator)
            return {
                ...prevData,
                task: updatedTasks
            }
        })
    }

    const arrayButtons = formData.days.map((day,index)=>{
        return <button
                    key={index} 
                    onClick={()=>toggle(day.id)} 
                    className={`button-day ${day.dayIsActive ? 'button-active' : ''}`}
                    /* isActive={day.dayIsActive} No se que hacia esto pero funciona sin esto*/
                >{day.id.slice(0,2).toUpperCase()}
                </button>
    })
    //code that handle the button that deletes a task in the task list during creation
    function deleteTask(id){
        setFormData(prevData => {
            const newTaskList = [...prevData.task].filter(item => item.id !== id)
            return {
                ...prevData,
                task: newTaskList
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        const newId = nanoid()
        setFormData(prevData => {
            return ({
                ...prevData,
                id: newId,
                percentage: 0
            })
        })
    }
    function handleClickCreate(){
        console.log(formData)
        if(formData.myGoal){
            upDateGoals(formData)
            setIsCreated(true)
            console.log(formData)
        }else{
            setIsEmpty(true)
        }
    }
    if(!isCreated){
        return(
            <form className="goal-creator" onSubmit={handleSubmit}>
                <h1>What is your new goal?</h1>
                {isEmpty && <p style={{marginBottom: "1rem", color: "var(--red)"}}>Please fill all the gaps</p> }
                <div className="container-general">
                    <label htmlFor="myGoal"> What do you want to achieve?</label>
                    <input 
                        type="text"
                        placeholder="My goal is..."
                        required
                        onChange={handleChange}
                        name="myGoal"
                        value={formData.myGoal}
                    ></input>
                </div>
                <div className="container-general">
                    <p>How many days will you be commited?</p>
                    <div className="container-buttons-days">
                        {arrayButtons}
                    </div>
                </div>
                <div className="container-general">
                    <label htmlFor="numberTime"> How much time per day?</label>
                    <div className="container-time">
                        <input 
                            type="text"
                            placeholder="15"
                            required
                            onChange={handleChange}
                            name="numberTime"
                            value={formData.numberTime}
                        ></input>
                        <select
                            value={formData.unitTime}
                            onChange={handleChange}
                            required
                            name="unitTime"
                        >
                            <option value="min">min</option>
                            <option value="hr" >hr</option>
                        </select>
                    </div>
                    {/* <p> x No time</p> */}
                </div>
                <div className="container-general date">
                    <p>When do you plan to finish?</p>
                    <Calendar getDate={(date)=> {return handleCalendar(date)}}/>
                </div>
                <h1>What is your plan?</h1>
                <TaskCreator getTask={(task) => {return handleTask(task)}}/>
                <div className="container-general">
                    <div className="container-task">
                        <p className="task-text">Task</p>
                        <p>Delete</p>
                    </div>
                    {formData.task && <TaskList tasks={formData.task} onClick={(id)=>deleteTask(id)}/>}
                </div>
{/*                 <button 
                    className="button-create"
                    onClick={handleClickCreate}
                >Create</button> */}
                <ButtonGeneral onClick={handleClickCreate}>Create</ButtonGeneral>
            </form>
        )
    }else{
        return <GoalFiller icon={<TiTickOutline style={{width: "100px", height: "100px"}}/>}>Goal successfully created</GoalFiller>
    }
}

export default GoalCreator