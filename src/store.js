import { createStore } from 'redux'
import reducer from './reducer'
import InitialTasks from './client/Tasks/InitialTasks'
import InitialPeople from './client/People/InitialPeople'

const defaultState = {
    tasks: InitialTasks,
    people: InitialPeople
}

const store = createStore(reducer, defaultState)

export default store