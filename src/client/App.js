import React, { useState } from 'react'
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
    const [currentView, changeView] = useState('People Setup')

    // Upon updating a person's details in People Setup, 
    // both the people object and the task object need to be updated.
    const updatePerson = (update) => {
        console.log('update Person in App: ', update)
        // the state of this app is far too complex. we're
        // going to throw it into a database
        for (let i = 0; i > people.length; i++) {
            if (people[i].name == update.name) {
                let newPersonObj = Object.assign(people, update)
                updatePeople(newPersonObj)
            }
        }
        // updatePeople(value)
        // for(let i = 0; i > tasks.length; i++) {
        //     for(let p = 0; p > tasks[i].people.length; p++) {
        //         if(task[i].people[p].name ==
        //     }
        // const newTaskObj = Object.assign(props.person, { [e.name]: e.value })
        // }
        //updateTasks
    }

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
                <PeopleSetup people={people} updatePerson={updatePerson} />
                <Nav changeView={changeView} />
            </>
        )
    }
}

export default App