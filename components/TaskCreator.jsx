import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { nanoid } from 'nanoid'
import "../styles/goalCreator.css"
import "../styles/taskCreator.css"

const TaskCreator = ({getTask})=>{
    const [task, setTask] = useState({task: '', id: '', isDone: false})

    function handleChange(event){
        const newId = nanoid()
        setTask(prevTask=>{
            return{
                ...prevTask,
                [event.target.name]: event.target.value,
                isDone: false,
                id: newId
            }
        })
    }
 /*    useEffect(()=>console.log(task),[task]) */
    function callBackTask(){
        getTask(task)
        cleanInputs()
    }

    function cleanInputs(){
        setTask({task: '', id: '', isDone: false})
    }

    return (

        <div className="container-general task">
            <label htmlFor="task"> Create a task</label>
            <div className="task-inner">
                <input 
                    type="text"
                    placeholder="New Task..."
                    onChange={handleChange}
                    name="task"
                    value={task.task}
                ></input>
                <button onClick={callBackTask}>
                    <FaPlus style={{fill: 'var(--white)'}}/> 
                </button>
            </div>
{/*                 <div className="input-inner days-inner">
                <label htmlFor="days"> How many days?</label>
                <input 
                    type="text"
                    placeholder="1"
                    onChange={handleChange}
                    name="days"
                    value={task.days}
                ></input>
            </div> */}
        </div>

    )
}

export default TaskCreator