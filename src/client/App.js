import React, { useState, useEffect } from 'react'
import InitialPeople from './People/InitialPeople'
import InitialTasks from './Tasks/InitialTasks'
import Nav from './Nav'
import Setup from './Setup'
import Fee from './Fee'
import PeopleSetup from './PeopleSetup'
import './css/setup.css'

const App = () => {
    const [people, updatePeople] = useState(InitialPeople)
    const [tasks, updateTasks] = useState(InitialTasks)
    const [currentView, changeView] = useState('Fee')

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
                <Fee tasks={tasks} people={people} updateTasks={updateTasks} />
                <Nav changeView={changeView} />
            </>
        )
    }

    if (currentView == 'People Setup') {
        return (
            <>
                <PeopleSetup people={people} updatePeople={updatePeople} />
                <Nav changeView={changeView} />
            </>
        )
    }
}

export default App