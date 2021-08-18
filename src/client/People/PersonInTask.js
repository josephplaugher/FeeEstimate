import React from 'react'
import './main.css'

const PersonInTask = (props) => {

    const getBillAmount = () => {
        return props.task.hours * props.person.billRate
    }

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