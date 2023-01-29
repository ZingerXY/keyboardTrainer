import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  auth: false
}

const Reducer = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, {...action.payload, auth: true})
    },
  }
})

export const {
  setUser
} = Reducer.actions

export default Reducer.reducer