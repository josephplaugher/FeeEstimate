import React, { useState, useEffect } from 'react'
import InitialPeople from './InitialPeople'
// import './css/index.css'
import './main.css'

function Person(props) {
    // const [tasks, setTasks] = useState()
    const getRawRate = (name) => {
        var i = 0
        for (i = 0; i < InitialPeople.length; i++) {
            if (InitialPeople[i].name == props.person.name) {
                console.log('raw rate', InitialPeople[i].rawRate)
                return InitialPeople[i].rawRate
            }
        }
    }

    const getBillRate = (name) => {
        var i = 0
        for (i = 0; i < InitialPeople.length; i++) {
            if (InitialPeople[i].name == props.person.name) {
                // console.log('raw rate', InitialPeople[i].billRate)
                return InitialPeople[i].billRate
            }
        }
    }

    return (
        <div className="cost-data" key={props.person.name}>
            <span className="name-labels">{props.person.name}</span>
            <span className="bill-rate-column">
                {getBillRate(props.person.name)}
            </span>
            <span className="hours-column">
                {props.person.hours}
            </span>
            <span className="bill-amount-column">
                {getBillRate(props.person.name) * props.person.hours}
            </span>
        </div>

    )
}

export default Person