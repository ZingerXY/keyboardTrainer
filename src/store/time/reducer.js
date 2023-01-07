import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    seconds: 0,
    minutes: 0
}

const Reducer = createSlice({
    name: 'TimeReducer',
    initialState,
    reducers: {
        update_time: (state, action) => {
            state.seconds = action.payload.seconds
            state.minutes = action.payload.minutes
        },
    }
})

export const {
    update_time
} = Reducer.actions

export default Reducer.reducer