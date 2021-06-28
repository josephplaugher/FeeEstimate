import React from 'react'

function Nav(props) {

    return (
        <>
            <input className="view-change" type="button" name="Setup" value='Setup' onClick={(e) => props.changeView(e.target.value)} />
            <input className="view-change" type="button" name="Fee" value='Fee' onClick={(e) => props.changeView(e.target.value)} />
            <input className="view-change" type="button" name="People Setup" value='People Setup' onClick={(e) => props.changeView(e.target.value)} />
        </>
    )
}

export default Nav