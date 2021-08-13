import React from 'react'
import './main.css'

const PersonInTask = (props) => {

    const getBillAmount = () => {
        // for (let i = 0; i < props.task.length; i++) {
        //     if (props.task[i].name == props.person.name) {
        //         console.log('bill rate', props.person.billRate, 'hours', props.task[i].hours)
        //         return props.person.billRate * props.task[i].hours
        //     }
        // }
        return props.task.hours * props.person.billRate
    }

    console.log('task data:', props.task, 'person data: ', props.person)

    return (
        <div className="cost-data" key={props.task.name}>
            <span className="name-labels">{props.task.name}</span>
            <span className="bill-rate-column">
                {parseFloat(props.person.billRate).toFixed(2)}
            </span>
            <span className="hours-column">
                {props.task.hours}
            </span>
            <span className="bill-amount-column">
                {parseFloat(getBillAmount()).toFixed(2)}
            </span>
        </div>
    )
}

export default PersonInTask