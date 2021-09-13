import React, { useState } from 'react'
import './main.css'
import './person.css'

const PersonSetup = (props) => {

    const [mult, updateMult] = useState(props.person.billrate / props.person.rawrate)
    // Because I am using shared state across sibling components which I also must update in those components
    // i have to manually trigger a state update to get the current component to rerender without having to switch
    // views. the rerender state here updates the UI.
    const [rerender, TriggerRerender] = useState(0)

    const changeState = (e) => {
        const newState = Object.assign(props.person, { [e.name]: e.value })
        //props.updatePerson(newState, props.person.id)
        TriggerRerender(rerender + 1)
    }

    const setMult = (e) => {
        let name
        let newMult
        const value = parseInt(e.value)
        if (e.name == 'billrate') {
            name = 'billrate'
            newMult = value / props.person.rawrate
        }
        if (e.name == 'rawrate') {
            name = 'rawrate'
            newMult = props.person.billrate / value
        }
        updateMult(newMult)
    }

    return (
        <div className="person-data">
            <input className="ppl-name-input" type="text" name="name" value={props.person.name}
                onChange={(e) => changeState(e.target)} onBlur={(e) => props.updatePerson(e, props.id)} />
            <input className="ppl-raw-input" type="text" name="rawrate" value={props.person.rawrate}
                onChange={(e) => {
                    changeState(e.target);
                    setMult(e.target);
                }}
                onBlur={(e) => props.updatePerson(e, props.id)}
            />
            <input className="ppl-title-input" type="text" name="billtitle" value={props.person.billtitle}
                onChange={(e) => changeState(e.target)} onBlur={(e) => props.updatePerson(e, props.id)} />
            <input className="ppl-bill-input" type="text" name="billrate" value={props.person.billrate}
                onChange={(e) => {
                    changeState(e.target);
                    setMult(e.target);
                }} onBlur={(e) => props.updatePerson(e, props.id)}
            />
            <input className="ppl-mult-input" type="text" name="multiplier" readOnly
                value={parseFloat(mult).toFixed(2)} onBlur={(e) => props.updatePerson(e, props.id)}
            />
        </div>
    )

}

export default PersonSetup