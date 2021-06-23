import React, { useState, useEffect } from 'react'
import Setup from './Setup'
import Fee from './Fee'
import PeopleSetup from './PeopleSetup'
import './css/setup.css'

function App() {

    const [currentView, changeView] = useState('Setup')

    if (currentView == 'Setup') {
        return (
            <>
                <Setup />
                <input className="view-change" type="button" name="Setup" value='Setup' onClick={(e) => changeView(e.target.value)} />
                <input className="view-change" type="button" name="Fee" value='Fee' onClick={(e) => changeView(e.target.value)} />
                <input className="view-change" type="button" name="People Setup" value='People Setup' onClick={(e) => changeView(e.target.value)} />
            </>
        )
    }
    if (currentView == 'Fee') {
        return (
            <>
                <Fee />
                <input className="view-change" type="button" name="Setup" value='Setup' onClick={(e) => changeView(e.target.value)} />
                <input className="view-change" type="button" name="Fee" value='Fee' onClick={(e) => changeView(e.target.value)} />
                <input className="view-change" type="button" name="People Setup" value='People Setup' onClick={(e) => changeView(e.target.value)} />
            </>
        )
    }

    if (currentView == 'People Setup') {
        return (
            <>
                <PeopleSetup />
                <input className="view-change" type="button" name="Setup" value='Setup' onClick={(e) => changeView(e.target.value)} />
                <input className="view-change" type="button" name="Fee" value='Fee' onClick={(e) => changeView(e.target.value)} />
                <input className="view-change" type="button" name="People Setup" value='People Setup' onClick={(e) => changeView(e.target.value)} />
            </>
        )
    }
}

export default App