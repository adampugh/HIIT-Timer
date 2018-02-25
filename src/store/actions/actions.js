import * as actionTypes from "./actionTypes";
import uuid from "uuid";

export const addWorkout = ({title, totalTime, exercises}) => ({
    type: actionTypes.ADD_WORKOUT,
    workout: {
        id: uuid(),
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
export const addExercise = (exercise, workoutId) => {
    if (exercise.breakIncluded) {
        return {
            type: actionTypes.ADD_EXERCISE,
            exercise,
            workoutId
        }
    } else {
        return {
            type: actionTypes.ADD_EXERCISE,
            exercise: {
                exerciseName: exercise.exerciseName,
                exerciseColor: exercise.exerciseColor,
                exerciseMinutes: exercise.exerciseMinutes,
                exerciseSeconds: exercise.exerciseSeconds
            },
            workoutId
        }
    }
}

// delete exercise