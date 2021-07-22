import React, { useState, useEffect } from 'react'
import Person from '../People/People'
import InitialPeople from '../People/InitialPeople'
import './main.css'

class Tasks extends React.Component {
    constructor(props) {
        super(props)
        state = {}
    }

    render() {
        const getTaskTotal = (task, people) => {
            console.log('task/people,: ', task, people)
            var i = 0
            var personTotals = []
            for (i = 0; i < task.people.length; i++) {
                console.log('in get task total: ', people[i])
                personTotals[i] = getPersonTotal(people[i], task)
            }
            var taskTotal = personTotals.reduce(getTotal)
            return taskTotal
        }

        const getPersonTotal = (person, task) => {
            var i = 0
            for (i = 0; i < task.people.length; i++) {
                if (task.people[i].name == person.name) {
                    console.log('in person totals: ', task.people[i].hours, person.billRate)
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
                    {InitialPeople.map((p) =>
                        <Person person={p} key={`Person-${p.name}`}></Person>
                    )}
                </div>
                <div key={`${props.task.number} total`} className="task-totals"><p>{getTaskTotal(props.task, props.people)}</p></div>
            </div>
        )
    }
}

export default Tasks