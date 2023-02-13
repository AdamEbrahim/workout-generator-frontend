import { configureStore } from "@reduxjs/toolkit";
import routineReducer from "../components/routine/routineSlice";

export const store = configureStore({
    reducer: {
        routine: routineReducer
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

