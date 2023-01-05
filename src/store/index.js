import {combineReducers, createStore} from "redux";
import { DataReducer } from "./reducers/DataReducer";
import { TimeReducer } from "./reducers/TimeReducer";
const rootReducer = combineReducers({
    DataReducer,
    TimeReducer,
})

export const store = createStore(rootReducer)