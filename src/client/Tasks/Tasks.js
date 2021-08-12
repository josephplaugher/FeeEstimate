import React, { useState, useEffect } from 'react'
import PersonInTask from '../People/PersonInTask'
import './main.css'

const Tasks = (props) => {

    const getTaskTotal = (task, people) => {
        var i = 0
        var personTotals = []
        for (i = 0; i < task.people.length; i++) {
            personTotals[i] = getPersonTotal(people[i], task)
        }
        var taskTotal = personTotals.reduce(getTotal)
        return taskTotal
    }

    const getPersonTotal = (person, task) => {
        var i = 0
        for (i = 0; i < task.people.length; i++) {
            if (task.people[i].name == person.name) {
                var total = parseInt(task.people[i].hours * person.billRate, 2)
                return total
            }
        }
    }

    const getTotal = (total, currentNumber) => {
        return total + currentNumber
    }

    return (
        <div className="task-container">
            <p key={props.task.number}>Task: {props.task.number} - {props.task.name}</p>
            <div className="people-container">
                {props.people.map((p) =>
                    <PersonInTask person={p} task={props.task} key={`Person-${p.name}`} />
                )}
            </div>
            <div key={`${props.task.number} total`} className="task-totals"><p>{getTaskTotal(props.task, props.people)}</p></div>
        </div>
    )
}

export default Tasks