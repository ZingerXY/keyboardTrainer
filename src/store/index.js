import { configureStore } from "@reduxjs/toolkit";
import TimeReducer from "./time/timeSlice";
import DataReducer from "./data/dataSlice";

const store = configureStore({
    reducer: {
        TimeReducer,
        DataReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: false,
      }),
});

export default store;
