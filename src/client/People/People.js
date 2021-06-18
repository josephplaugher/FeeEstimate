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
        <p className="cost-data" key={props.person.name}>
            {`${props.person.name}
                Bill Rate:
                ${getBillRate(props.person.name)}
                bill amount:
                ${getBillRate(props.person.name) * props.person.hours}`}
        </p>

    )
}

export default Person