import {configureStore} from "@reduxjs/toolkit";
import TimeReducer from "./time/timeSlice";
import DataReducer from "./data/dataSlice";
import UserReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    TimeReducer,
    DataReducer,
    UserReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
