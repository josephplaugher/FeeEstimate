import React, { useState } from 'react'
import './main.css'
import './person.css'

const PersonSetup = (props) => {

    const [mult, updateMult] = useState(props.person.billRate / props.person.rawRate)
    const [rerender, TriggerRerender] = useState(0)

    const changeState = (e) => {
        const newState = Object.assign(props.person, { [e.name]: e.value })
        console.log('new state: ', newState)
        props.updatePerson(newState)
        TriggerRerender(rerender + 1)
    }

    const setMult = (e) => {
        let name
        let newMult
        const value = parseInt(e.value)
        if (e.name == 'billRate') {
            name = 'billRate'
            newMult = value / props.person.rawRate
        }
        if (e.name == 'rawRate') {
            name = 'rawRate'
            newMult = props.person.billRate / value
        }
        console.log('setMutl State: ', props.person)
        updateMult(newMult)
    }

    return (
        <div className="person-data">
            <input className="ppl-name-input" type="text" name="name" value={props.person.name}
                onChange={(e) => changeState(e.target)} />
            <input className="ppl-raw-input" type="text" name="rawRate" value={props.person.rawRate}
                onChange={(e) => {
                    changeState(e.target);
                    setMult(e.target);
                }}
            />
            <input className="ppl-title-input" type="text" name="billTitle" value={props.person.billTitle}
                onChange={(e) => changeState(e.target)} />
            <input className="ppl-bill-input" type="text" name="billRate" value={props.person.billRate}
                onChange={(e) => {
                    changeState(e.target);
                    setMult(e.target);
                }} />
            <input className="ppl-mult-input" type="text" name="multiplier" readOnly
                value={parseFloat(mult).toFixed(2)} />
        </div>
    )

}

export default PersonSetup