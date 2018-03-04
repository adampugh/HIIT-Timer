import * as actionTypes from "./actionTypes";
import database from "../../firebase/firebase";
import { firebase, googleAuthProvider } from "../../firebase/firebase";
import { push } from 'react-router-redux';

// ADD_WORKOUT
export const addWorkout = (workout) => ({
    type: actionTypes.ADD_WORKOUT,
    workout
});

export const startAddWorkout = ({title, exercises, index}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const workout = {
            title,
            exercises
        };
        const workoutIndex = index;
        return database.ref(`users/${uid}/workouts`).push(workout).then((ref) => {

            dispatch(addWorkout({
                id: ref.key,
                ...workout
            }));

            dispatch(push({
                pathname: `/hiit-timer/workouts/${workout.title.split(" ").join("-").toLowerCase()}/edit`,
                state: {
                    workout: [], 
                    workoutId: ref.key, 
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

export const startDeleteWorkout = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/workouts/${id}`).remove().then((ref) => {
            dispatch(deleteWorkout(id));
        });
    };
};


// ADD_EXERCISE
export const addExercise = (exercise, workoutId) => ({
    type: actionTypes.ADD_EXERCISE,
    exercise,
    workoutId
});

export const startAddExercise = (exercise, workoutId) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/workouts/${workoutId}/exercises`).push(exercise).then((ref) => {
            dispatch(addExercise({
                id: ref.key,
                ...exercise
            }, workoutId));
        });
    };
};


// DELETE_EXERCISE
export const deleteExercise = (index, workoutId) => ({
    type: actionTypes.DELETE_EXERCISE,
    index,
    workoutId
});

export const startDeleteExercise = (index, workoutId, exerciseId) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/workouts/${workoutId}/exercises/${exerciseId}`).remove().then((ref) => {
            dispatch(deleteExercise(index, workoutId));
        });
    };
};


// FETCH_WORKOUTS
export const fetchWorkouts = (workouts) => ({
    type: actionTypes.FETCH_WORKOUTS,
    workouts
});

export const startFetchWorkouts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/workouts`).once("value").then((snapshot) => {
            const workouts = [];
            snapshot.forEach((childSnapshot) => {
                // convert exercises obj into array
                const exercises = [];
                for (let key in childSnapshot.val().exercises) {
                    exercises.push( {
                        id: key,
                        ...childSnapshot.val().exercises[key]
                    });
                }
                workouts.push({
                    ...childSnapshot.val(),
                    id: childSnapshot.key,
                    exercises: exercises || []
                });
            });
            dispatch(fetchWorkouts(workouts));
        });
    }
};


export const login = (uid) => ({
    type: actionTypes.LOGIN,
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};


export const logout = () => ({
    type: actionTypes.LOGOUT
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};