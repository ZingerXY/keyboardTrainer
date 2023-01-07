import { configureStore } from "@reduxjs/toolkit";
import TimeReducer from "./time/reducer";
import DataReducer from "./data/reducer";

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
