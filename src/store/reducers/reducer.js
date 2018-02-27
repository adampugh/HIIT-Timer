import * as actionTypes from "../actions/actionTypes";

const initialState = {
    workouts: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WORKOUTS:
            return {
                ...state,
                workouts: action.workouts
            };
        case actionTypes.ADD_WORKOUT: 
            return {
                ...state,
                workouts: [...state.workouts, action.workout]
            };
        case actionTypes.DELETE_WORKOUT:
            return {
                ...state,
                workouts: state.workouts.filter((item, index) => {
                     if (item.id !== action.id) {
                          return item
                        }
                    })
            };
        case actionTypes.ADD_EXERCISE:
            return {
                ...state,
                workouts: state.workouts.map((workout, index) => {
                    if (workout.id === action.workoutId) {
                        return {
                            ...workout,
                            exercises: [...workout.exercises, action.exercise]
                        }
                    } else {
                        return {...workout};
                    }
                })
            }
        case actionTypes.DELETE_EXERCISE:
            return {
                ...state,
                workouts: state.workouts.map((workout, index) => {
                    if (workout.id === action.workoutId) {
                        return {
                            ...workout,
                            exercises: workout.exercises.filter((exercise, index) => index !== action.index)
                        }
                    } else {
                        return {...workout}
                    }
                })
            }
        default: 
            return state;
    }
};

export default reducer;