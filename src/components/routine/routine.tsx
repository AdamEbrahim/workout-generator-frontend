import React, { useEffect } from "react";
import { AppDispatch, store } from "../../app/store";
import { addExercise, deleteExercise, setExercises, selectExercises } from "./routineSlice";
import { useDispatch, useSelector } from "react-redux";
import { exercise } from "../exercise/exercise";


const Routine = () => {
    const currentExercises = useSelector(selectExercises) //useSelector makes this selector subscribe to changes in the store so it auto re-renders currentExercises when state changes
    const dispatch = useDispatch<AppDispatch>()

    //used to retrieve exercises only once when user visits website
    useEffect(() => {

        const fetchData = () => {
            fetch(`http://localhost:3001/GetAllExerciseData`, {
                method: 'GET',
                //credentials: 'include',
                headers: {
                    //'X-CSRF-Token': getCSRFToken(),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then((data) => {
                console.log("---")
                console.log(data);
                dispatch(setExercises(data)) //data is an exercise[]
            })
            
        }
        if (currentExercises.length === 0) {
            fetchData()
        }
    }, [])
    
    const list: JSX.Element[] = currentExercises.map((currentExercise: exercise) => (
        <li key={currentExercise.ID}>
            {currentExercise.name}
        </li>
        ))

    if (currentExercises.length > 0) {
        //console.log("num")
        //console.log(currentExercise)
        return(
            <ul>{list}</ul>
        )
    }
    return(
        null
    )
}

export default Routine