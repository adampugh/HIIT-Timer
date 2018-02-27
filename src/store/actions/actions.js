import * as actionTypes from "./actionTypes";
import database from "../../firebase/firebase";
import { push } from 'react-router-redux';

// ADD_WORKOUT
export const addWorkout = (workout) => ({
    type: actionTypes.ADD_WORKOUT,
    workout
});

export const startAddWorkout = ({id, title, totalTime, exercises, index}) => {
    return (dispatch) => {
        const workout = {
            id,
            title,
            totalTime,
            // exercises is empty array - wont be saved to fb
            // until exercise is passed - format then
            exercises
        };
        const workoutIndex = index;
        database.ref("workouts").push(workout).then(() => {
            // redirect here
            
            dispatch(addWorkout(workout));
            dispatch(push({
                pathname: `/workouts/${workout.title.split(" ").join("-").toLowerCase()}/edit`,
                state: {
                    workout: [], 
                    workoutId: workout.id, 
                    workoutIndex
                }   
            }));
        });
    };
};


// DELETE_WORKOUT
export const deleteWorkout = (id) => ({
    type: actionTypes.DELETE_WORKOUT,
    id
});

// ADD_EXERCISE
export const addExercise = (exercise, workoutId) => ({
    type: actionTypes.ADD_EXERCISE,
    exercise,
    workoutId
});

// DELETE_EXERCISE
export const deleteExercise = (index, workoutId) => ({
    type: actionTypes.DELETE_EXERCISE,
    index,
    workoutId
});