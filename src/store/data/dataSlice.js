import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    uncorrect: 0,
    correct: 0,
    language: 'Русский',
    language_keys: {
        topLeftCharacter: 'ё',
        keys: 'йцукенгшщзхъфывапролджэёячсмитьбю/'
    }
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
        },
        set_language: (state, action) => {
            state.language = action.payload
        },
        set_language_keys: (state, action) => {
            state.language_keys.topLeftCharacter = action.payload.topLeftCharacter;
            state.language_keys.keys = action.payload.keys;
        }
    }
})

export const {
    add_uncorrect,
    add_correct,
    set_language,
    set_language_keys
} = Reducer.actions

export default Reducer.reducer