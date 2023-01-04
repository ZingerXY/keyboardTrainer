import {combineReducers, createStore} from "redux";
import { DataReducer } from "./reducers/DataReducer";

const rootReducer = combineReducers({
    DataReducer
})

export const store = createStore(rootReducer)