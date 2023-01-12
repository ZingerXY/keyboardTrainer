import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    uncorrect: 0,
    correct: 0
}

const Reducer = createSlice({
    name: 'DataReducer',
    initialState,
    reducers: {
        add_uncorrect: (state, action) => {
            state.uncorrect = action.payload
        },
        add_correct: (state, action) => {
            state.correct = action.payload
        }
    }
})

export const {
    add_uncorrect,
    add_correct
} = Reducer.actions

export default Reducer.reducer