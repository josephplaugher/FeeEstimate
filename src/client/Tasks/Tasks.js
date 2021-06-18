import React, { useState, useEffect } from 'react'
import Person from '../People/People'
// import './css/index.css'
import './main.css'

function Tasks(props) {
    // const [tasks, setTasks] = useState()
    return (
        <>
            <div className="task-labels" key={`${props.task.number} - div`} >
                <p key={props.task.number}>Task: {props.task.number} - {props.task.name}</p>
            </div>
            <div className="people-container">

                {props.people.map((p) =>
                    <Person person={p}></Person>
                )}
            </div>
        </>
    )
}

export default Tasks