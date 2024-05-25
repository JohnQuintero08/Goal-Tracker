import React from "react"
import "../styles/goalCreator.css"
import "../styles/taskList.css"
import { FaTrashCan } from "react-icons/fa6";
import { Reorder } from "framer-motion";


const TaskList = ({tasks, onClick})=>{
    
    const arrayOfTasks = tasks.map((task) => {
        return (
            <div className="container-task-list" key={task.id}>
                <p>{task.task}</p>
                <button 
                    onClick={()=> onClick(task.id)}
                >
                    <FaTrashCan style={{fill: 'var(--white)'}}/>
                </button>
            </div>
        )
    })
    return(
        <>
            {arrayOfTasks}
        </>
    )
}

export default TaskList