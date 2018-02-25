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

export const deleteWorkout = (id) => ({
    type: actionTypes.DELETE_WORKOUT,
    id
});

export const addExercise = (exercise, workoutId) => ({
    type: actionTypes.ADD_EXERCISE,
    exercise,
    workoutId
});

export const deleteExercise = (index, workoutId) => ({
    type: actionTypes.DELETE_EXERCISE,
    index,
    workoutId
});