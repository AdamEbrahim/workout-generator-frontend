import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { exercise } from "../exercise/exercise"


const initialState: routineState = {
    exercises: []
}


export interface routineState {
    exercises: exercise[]

}

export const routineSlice = createSlice({
    name: 'routine',
    initialState,
    reducers: {
        addExercise: (state, action: PayloadAction<number>) => { //add by exercise id
            state.exercises.map((specificExercise: exercise) => {
                if (specificExercise.ID === action.payload) {
                    var newExercise: exercise
                    //DO FETCH REQUEST TO API TO GET THE EXERCISE BASED ON ID, ASSING TO NEWEXERCISE
                    //newExercise = {id: 3, name: "hi"}
                    //state.exercises = [...state.exercises, newExercise]

                }
            })
        },
        deleteExercise: (state, action: PayloadAction<number>) => {
            state.exercises.map((specificExercise: exercise) => {
                if (specificExercise.ID === action.payload) {
                    var newState: exercise[] = [...state.exercises]
                    state.exercises = newState.splice(newState.indexOf(specificExercise), 1)
                }
            })
        },
        setExercises: (state, action: PayloadAction<exercise[]>) => { //start by setting all exercises through API fetch
            state.exercises = action.payload
        }

    }
})

export const {addExercise, deleteExercise, setExercises} = routineSlice.actions

//below is selector for the array of exercises
export const selectExercises = (state: RootState) => {
    return state.routine.exercises
}

const routineReducer = routineSlice.reducer
export default routineReducer
