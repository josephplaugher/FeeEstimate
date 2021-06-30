import { createStore } from 'redux'
import RootReducer from './r_reducers/RootReducer'
import InitialTasks from './client/Tasks/InitialTasks'
import InitialPeople from './client/People/InitialPeople'

const defaultState = {
    tasks: InitialTasks,
    people: InitialPeople
}

const Store = createStore(RootReducer, defaultState)

export default Store