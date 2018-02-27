import * as actionTypes from "./actionTypes";
import database from "../../firebase/firebase";
import { push } from 'react-router-redux';

// ADD_WORKOUT
export const addWorkout = (workout) => ({
    type: actionTypes.ADD_WORKOUT,
    workout
});

// could remove id? set by fb?
export const startAddWorkout = ({id, title, totalTime, exercises, index}) => {
    return (dispatch) => {
        const workout = {
            // id,
            title,
            totalTime,
            // exercises is empty array - wont be saved to fb
            // until exercise is passed - format then
            exercises
        };
        const workoutIndex = index;
        database.ref("workouts").push(workout).then((ref) => {

            dispatch(addWorkout({
                id: ref.key,
                ...workout
            }));

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

// FETCH_WORKOUTS
export const fetchWorkouts = (workouts) => ({
    type: actionTypes.FETCH_WORKOUTS,
    workouts
});

export const startFetchWorkouts = () => {
    return (dispatch) => {
        return database.ref("workouts").once("value").then((snapshot) => {
            const workouts = [];
            snapshot.forEach((childSnapshot) => {
                workouts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            console.log(workouts);
            dispatch(fetchWorkouts(workouts));
        });
    }
};