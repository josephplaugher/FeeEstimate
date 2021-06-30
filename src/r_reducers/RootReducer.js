import { combineReducers } from "redux";

import people from "./PeopleReducers";

const RootReducer = combineReducers({ people })

export default RootReducer