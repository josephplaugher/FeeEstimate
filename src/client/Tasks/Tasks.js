import React, { useState, useEffect } from 'react'
import PersonInTask from '../People/PersonInTask'
import './main.css'

const Tasks = (props) => {
    // console.log('task data:', props.task, 'person data: ', props.people)

    const getThisPerson = (subjectPerson) => {
        for (let i = 0; i < props.people.length; i++) {
            if (props.people[i].name == subjectPerson) {
                return props.people[i]
            }
        }
    }

    return (
        <div className="task-container">
            <p key={props.task.number}>Task: {props.task.number} - {props.task.name}</p>
            <div className="people-container">
                {props.task.people.map((p) =>
                    <PersonInTask task={p} person={getThisPerson(p.name)} key={`Person-${p.name}`} />
                )}
            </div>
            <div key={`${props.task.number} total`} className="task-totals"><p>fix task total</p></div>
        </div>
    )
}

export default Tasks