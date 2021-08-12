import React from 'react'
import './main.css'

const PersonInTask = (props) => {

    const getBillAmount = () => {
        for (let i = 0; i < props.task.people.length; i++) {
            if (props.task.people[i].name == props.person.name) {
                console.log('bill rate', props.person.billRate, 'hours', props.task.people[i].hours)
                return props.person.billRate * props.task.people[i].hours
            }
        }
    }

    // const getBillRate = (name) => {
    //     for (let i = 0; i < props.person.length; i++) {
    //         if (props.person[i].name == props.person.name) {
    //             console.log('bill rate', props.person[i].billRate)
    //             return props.person[i].billRate
    //         }
    //     }
    // }

    return (
        <div className="cost-data" key={props.person.name}>
            <span className="name-labels">{props.person.name}</span>
            <span className="bill-rate-column">
                {props.person.billRate}
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