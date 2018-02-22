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

// add exercise

// delete exercise