import React, { useState, useEffect } from 'react'

function PersonSetup(props) {

    const setMult = (e) => {

    }

    return (
        <>
            <p key={`setup-${props.person.name}`} className="label">Name</p><input className="ppl-input" type="text" name="name" value={props.person.name} onChange={(e) => props.changeState(e.target)} />
            <p key={`setup-${props.person.rawRate}`} className="label">Raw Rate</p><input className="ppl-input" type="text" name="rawRate" value={props.person.rawRate} onChange={(e) => props.changeState(e.target)} />
            <p key={`setup-${props.person.billTitle}`} className="label">Billing Title</p><input className="ppl-input" type="text" name="billingTitle" value={props.person.billTitle} onChange={(e) => props.changeState(e.target)} />
            <p key={`setup-${props.person.billRate}`} className="label">Billing Rate</p><input className="ppl-input" type="text" name="billingRate" value={props.person.billRate} onChange={(e) => props.changeState(e.target)} />
            <p key={`setup-mult`} className="label">Multiplier</p><input className="ppl-input" type="text" name="multiplier" value={props.person.multiplier} onChange={(e) => setMult(e.target)} />
        </>
    )

}

export default PersonSetup