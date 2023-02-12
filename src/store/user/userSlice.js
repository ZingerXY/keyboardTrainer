import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  id: null,
}

const Reducer = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, {...action.payload, auth: true});
    },
    setUserId: (state, action) => {
      state.id = action.payload;
    },
  }
})

export const {
  setUser, setUserId
} = Reducer.actions;

export default Reducer.reducer;