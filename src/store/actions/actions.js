import * as actionTypes from "./actionTypes";

export const addWorkout = ({id, title, totalTime, exercises}) => ({
    type: actionTypes.ADD_WORKOUT,
    workout: {
        id,
        title,
        totalTime,
        exercises
    }
});

// delete workout
export const deleteWorkout = (id) => ({
    type: actionTypes.DELETE_WORKOUT,
    id
});

// add exercise
export const addExercise = (exercise, workoutId) => ({
    type: actionTypes.ADD_EXERCISE,
    exercise,
    workoutId
});

// delete exercise
export const deleteExercise = (index, workoutId) => ({
    type: actionTypes.DELETE_EXERCISE,
    index,
    workoutId
});