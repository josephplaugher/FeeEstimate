import React, { useState, useEffect } from 'react'
import './main.css'
import './person.css'

function PersonSetup(props) {

    const [state, updateState] = useState(props.person)
    const [mult, updateMult] = useState(props.person.billRate / props.person.rawRate)

    const changeState = (e) => {
        const name = e.name
        const value = e.value
        const newState = Object.assign(state, { [name]: value })
        updateState(newState)
    }

    const setMult = (e) => {
        var name
        var newMult
        const value = parseInt(e.value)
        if (e.name == 'billRate') {
            name = 'billRate'
            newMult = value / state.rawRate
        }
        if (e.name == 'rawRate') {
            name = 'rawRate'
            newMult = state.billRate / value
        }
        updateMult(newMult)
    }

    return (
        <div className="person-data">
            <input className="ppl-name-input" type="text" name="name" value={state.name} onChange={(e) => changeState(e.target)} />
            <input className="ppl-raw-input" type="text" name="rawRate" value={state.rawRate}
                onChange={(e) => {
                    changeState(e.target);
                    setMult(e.target);
                }}
            />
            <input className="ppl-title-input" type="text" name="billingTitle"
                value={state.billTitle} onChange={(e) => changeState(e.target)} />
            <input className="ppl-bill-input" type="text" name="billRate" value={state.billRate}
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