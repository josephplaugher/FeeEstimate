import { combineReducers } from "redux";

import people from "./PeopleReducers";
import tasks from "./TaskReducers";

const RootReducer = combineReducers({ people, tasks })

export default RootReducer