import React from "react"
import './Tasks.scss'
import Task from "../Task/Task"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Tasks = () => {
    return (
        <div className="tasks-page">
            <Task />
        </div>
    )
}

export default Tasks