import React, { useState, useEffect } from 'react'
import './main.css'
import './person.css'

function PersonSetup(props) {

    const [state, updateState] = useState(props.person)
    const [mult, updateMult] = useState({ billRate: props.person.billRate, rawRate: props.person.rawRate })

    const changeState = (e) => {
        const name = e.name
        const value = e.value
        const newState = { [name]: value }
        updateState(newState)
    }

    const setMult = (e) => {
        // console.log('set mult: ', e.value)
        // var name
        // if (e.name == 'billingRate') {
        //     name = 'billingRate'
        // }
        // if (e.name == 'rawRate') {
        //     name = 'rawRate'
        // }
        // console.log('set mult: ', e.value, 'name: ,', name)
        // const value = parseInt(e.value)
        // const newMult = { [name]: value }
        // updateMult(newMult)
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
            <input className="ppl-bill-input" type="text" name="billingRate" value={state.billRate}
                onChange={(e) => {
                    changeState(e.target);
                    setMult(e.target);
                }} />
            <input className="ppl-mult-input" type="text" name="multiplier"
                value={parseInt(state.billRate).toFixed(2) / parseInt(state.rawRate).toFixed(2)} />
        </div>
    )

}

export default PersonSetup