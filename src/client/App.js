import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Setup from './Setup'
import Fee from './Fee'
import PeopleSetup from './PeopleSetup'
import './css/setup.css'

function App(props) {

    const [currentView, changeView] = useState('Setup')
    console.log('props in app:', props)
    if (currentView == 'Setup') {
        return (
            <>
                <Setup />
                <Nav changeView={changeView} />
            </>
        )
    }
    if (currentView == 'Fee') {
        return (
            <>
                <Fee />
                <Nav changeView={changeView} />
            </>
        )
    }

    if (currentView == 'People Setup') {
        return (
            <>
                <PeopleSetup people={props.people} />
                <Nav changeView={changeView} />
            </>
        )
    }
}

export default App